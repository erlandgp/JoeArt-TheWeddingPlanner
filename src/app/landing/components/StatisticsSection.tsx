'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const StatisticsSection = () => {
  const stats = [
    {
      number: "54.929",
      label: "Undangan Dibuat"
    },
    {
      number: "2.874.104",
      label: "Tamu Diundang"
    },
    {
      number: "273.460",
      label: "Undangan Dikirim"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-katsudoto-cream relative overflow-hidden">
      {/* Background decorative images */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10">
        <img
          src="https://ext.same-assets.com/217228340/4281732652.png"
          alt="Decorative element"
          className="w-32 h-auto"
        />
      </div>
      <div className="absolute right-0 top-1/4 opacity-10">
        <img
          src="https://ext.same-assets.com/217228340/1306556921.svg"
          alt="Decorative element"
          className="w-40 h-auto"
        />
      </div>
      <div className="absolute right-0 bottom-1/4 opacity-10">
        <img
          src="https://ext.same-assets.com/217228340/2431576765.svg"
          alt="Decorative element"
          className="w-36 h-auto"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-boxing text-katsudoto-teal mb-8 leading-tight">
            Ribuan Pasangan Pilih Katsudoto Untuk Wujudkan Undangan Pernikahan yang Tak Terlupakan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-boxing text-katsudoto-pink mb-4">
                {stat.number}
              </div>
              <div className="text-xl md:text-2xl text-katsudoto-teal font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/">
            <Button
              size="lg"
              className="bg-katsudoto-pink hover:bg-katsudoto-pink/90 text-white px-12 py-6 text-xl font-medium rounded-full"
            >
              Buat Undangan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
