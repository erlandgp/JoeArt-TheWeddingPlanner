'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-katsudoto-cream overflow-hidden pt-16">
      {/* 3D Pink Ring - Left */}
      <div className="absolute left-[-10%] top-[20%] w-80 h-80 md:w-96 md:h-96 transform rotate-12 opacity-90">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-katsudoto-pink to-pink-400 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #dc2d58 0%, #e85577 30%, #f477a1 100%)',
            borderRadius: '50%',
            transform: 'perspective(1000px) rotateX(60deg) rotateY(-20deg)',
            filter: 'drop-shadow(0 20px 40px rgba(220, 45, 88, 0.3))'
          }}>
          <div className="w-1/2 h-1/2 rounded-full bg-katsudoto-cream absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: 'translate(-50%, -50%) perspective(1000px) rotateX(60deg) rotateY(-20deg)',
            }}>
          </div>
        </div>
      </div>

      {/* 3D Pink Ring - Right */}
      <div className="absolute right-[-10%] top-[30%] w-80 h-80 md:w-96 md:h-96 transform rotate-[-12deg] opacity-90">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-katsudoto-pink to-pink-400 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #dc2d58 0%, #e85577 30%, #f477a1 100%)',
            borderRadius: '50%',
            transform: 'perspective(1000px) rotateX(60deg) rotateY(20deg)',
            filter: 'drop-shadow(0 20px 40px rgba(220, 45, 88, 0.3))'
          }}>
          <div className="w-1/2 h-1/2 rounded-full bg-katsudoto-cream absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: 'translate(-50%, -50%) perspective(1000px) rotateX(60deg) rotateY(20deg)',
            }}>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-boxing text-katsudoto-pink mb-6 leading-tight">
              All flexible.
              <br />
              <span className="text-katsudoto-pink">No Time Wasted.</span>
            </h1>
            <p className="text-lg md:text-xl text-katsudoto-teal mb-8 max-w-md">
              Sesuaikan desain undangan seperti keinginan kamu dari mana saja, kapan saja.
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = '/'}
              className="bg-katsudoto-pink hover:bg-katsudoto-pink/90 text-white px-8 py-6 text-lg font-medium rounded-full cursor-pointer"
            >
              Buat Undangan
            </Button>
          </div>

          {/* Center Phone Mockup */}
          <div className="lg:w-1/2 flex justify-center items-center relative">
            {/* Phone Frame */}
            <div className="relative">
              <img
                src="https://ext.same-assets.com/217228340/2692939849.png"
                alt="Phone Mockup"
                className="w-80 h-auto max-w-sm mx-auto relative z-20"
              />

              {/* Floating Music Widget */}
              <div className="absolute bottom-20 left-[-40px] bg-white rounded-2xl p-4 shadow-lg z-30 w-60">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-katsudoto-teal rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Photograph</div>
                    <div className="text-xs text-gray-500">Copy Fly</div>
                    <div className="text-xs text-gray-400">Good untuk menjadi-ngatur suara</div>
                  </div>
                  <div className="text-katsudoto-green">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-xs font-medium mb-1">1:30</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 h-1 rounded-full overflow-hidden">
                      <div className="bg-katsudoto-pink h-full w-1/3 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400">4:20</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Musik by wedding party</div>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute bottom-4 left-[-60px] w-16 h-16 bg-katsudoto-teal rounded-full flex items-center justify-center shadow-lg z-30">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m7.5 5.3 9 6.7-9 6.7V5.3z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Widget */}
      <a href="https://wa.me/628156647377" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
        <div className="bg-katsudoto-green hover:bg-green-600 text-white p-3 rounded-full shadow-lg cursor-pointer transition-colors duration-200">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306"/>
            </svg>
            <span className="hidden sm:inline text-sm font-medium">Tanya di WhatsApp</span>
          </div>
        </div>
      </a>
    </section>
  )
}

export default HeroSection
