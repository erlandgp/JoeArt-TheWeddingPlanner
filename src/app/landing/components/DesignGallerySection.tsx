'use client'

import React from 'react'

const DesignGallerySection = () => {
  const designImages = [
    'https://ext.same-assets.com/217228340/380486202.png',
    'https://ext.same-assets.com/217228340/896044616.png',
    'https://ext.same-assets.com/217228340/124220917.png',
    'https://ext.same-assets.com/217228340/2523649533.png',
    'https://ext.same-assets.com/217228340/1374494173.png',
    'https://ext.same-assets.com/217228340/3771051903.png',
    'https://ext.same-assets.com/217228340/23281880.png',
    'https://ext.same-assets.com/217228340/2256881466.png',
    'https://ext.same-assets.com/217228340/4012433940.png'
  ]

  return (
    <section className="py-16 md:py-24 bg-katsudoto-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-boxing text-katsudoto-teal text-center mb-4">
          Bebas pilih dan gunakan desain tanpa batasan!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {designImages.map((src, index) => (
            <div
              key={index}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Design template ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignGallerySection
