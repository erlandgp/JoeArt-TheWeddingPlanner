'use client'

import { useEffect, useRef, useState, useCallback } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Add CSS for the map container
const mapContainerStyle = {
  width: '100%',
  height: '400px',
  minHeight: '400px',
  position: 'relative' as const,
};

interface OpenLayersMapProps {
  onLocationSelect: (location: { lat: number; lng: number; address: string }) => void;
  initialCenter?: [number, number];
  initialZoom?: number;
}

export default function OpenLayersMap({ 
  onLocationSelect, 
  initialCenter = [106.8456, -6.2088], // Default to Jakarta
  initialZoom = 12 
}: OpenLayersMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Initialize the map once when component mounts
  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    try {
      // Initialize the map
      const newMap = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat(initialCenter),
          zoom: initialZoom,
        }),
        controls: defaultControls({
          attribution: false,
          zoom: true,
        }),
      });

      mapInstance.current = newMap;

      // Add click handler for the map
      newMap.on('click', function(evt) {
        const coordinate = evt.coordinate;
        const lonlat = toLonLat(coordinate);
        
        // Show loading state
        setSelectedLocation(null);
        
        // Reverse geocode to get address
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lonlat[1]}&lon=${lonlat[0]}&zoom=18&addressdetails=1`)
          .then(response => response.json())
          .then(data => {
            const address = data.display_name || 'Lokasi dipilih';
            const newLocation = { lat: lonlat[1], lng: lonlat[0] };
            setSelectedLocation(newLocation);
            onLocationSelect({
              ...newLocation,
              address: address
            });
          })
          .catch(error => {
            console.error('Error getting location details:', error);
          });
      });

      // Set up resize observer to update map size when container size changes
      const resizeObserver = new ResizeObserver(() => {
        newMap.updateSize();
      });
      
      if (mapRef.current) {
        resizeObserver.observe(mapRef.current);
      }

      // Cleanup function
      return () => {
        if (mapRef.current) {
          resizeObserver.unobserve(mapRef.current);
        }
        newMap.setTarget(undefined);
        newMap.dispose();
        mapInstance.current = null;
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [onLocationSelect, initialCenter, initialZoom]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!mapInstance.current || !searchQuery.trim()) return;

    // Show loading state
    setSelectedLocation(null);

    // Search using Nominatim
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const result = data[0];
          const lonlat = [parseFloat(result.lon), parseFloat(result.lat)];
          const newLocation = { 
            lat: parseFloat(result.lat), 
            lng: parseFloat(result.lon) 
          };
          
          setSelectedLocation(newLocation);
          
          onLocationSelect({
            ...newLocation,
            address: result.display_name
          });

          // Center map on search result
          mapInstance.current?.getView().animate({
            center: fromLonLat(lonlat as [number, number]),
            zoom: 16,
            duration: 1000
          });
        } else {
          // Handle no results
          console.log('No results found');
        }
      })
      .catch(error => {
        console.error('Error searching location:', error);
      });
  }, [searchQuery, onLocationSelect]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="location-search">Cari Lokasi</Label>
        <form onSubmit={handleSearch} className="flex space-x-2">
          <Input
            id="location-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Masukkan alamat atau nama tempat..."
            className="flex-1"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            disabled={!searchQuery.trim()}
          >
            Cari
          </button>
        </form>
      </div>
      
      <div className="relative">
        <div 
          ref={mapRef} 
          className="w-full rounded-md border border-gray-200 overflow-hidden"
          style={mapContainerStyle}
        >
          {!mapInstance.current && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <p>Memuat peta...</p>
            </div>
          )}
        </div>
      </div>
      
      {selectedLocation ? (
        <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-md">
          <p className="font-medium">Lokasi terpilih:</p>
          <p>Latitude: {selectedLocation.lat.toFixed(6)}</p>
          <p>Longitude: {selectedLocation.lng.toFixed(6)}</p>
        </div>
      ) : (
        <div className="text-sm text-gray-500 italic">
          Klik pada peta atau cari lokasi untuk memilih
        </div>
      )}
    </div>
  );
}
