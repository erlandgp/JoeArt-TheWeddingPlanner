'use client'

import React from 'react'

const ExpressYourselfSection = () => {
  const colorImages = [
    'https://ext.same-assets.com/217228340/2449531572.png',
    'https://ext.same-assets.com/217228340/1147998269.png',
    'https://ext.same-assets.com/217228340/1957799637.png',
    'https://ext.same-assets.com/217228340/582711259.png',
    'https://ext.same-assets.com/217228340/3273743692.png',
    'https://ext.same-assets.com/217228340/500111865.png',
    'https://ext.same-assets.com/217228340/1677599853.png',
    'https://ext.same-assets.com/217228340/4190815656.png',
    'https://ext.same-assets.com/217228340/4188664480.png',
    'https://ext.same-assets.com/217228340/3882664045.png',
    'https://ext.same-assets.com/217228340/4062720351.png',
    'https://ext.same-assets.com/217228340/945267796.png',
    'https://ext.same-assets.com/217228340/3439730728.png'
  ]

  return (
    <section className="py-16 md:py-24 bg-katsudoto-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-boxing text-katsudoto-teal mb-6">
            Express Yourself
          </h2>
          <p className="text-lg md:text-xl text-katsudoto-teal max-w-3xl mx-auto">
            Pengen ganti warna dan font biar sesuai konsep pernikahan kamu? Beres, tinggal atur aja!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {colorImages.map((src, index) => (
            <div
              key={index}
              className="aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Color customization ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpressYourselfSection
