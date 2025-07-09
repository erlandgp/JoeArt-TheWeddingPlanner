'use client'

import React from 'react'

const ProcessStepsSection = () => {
  const steps = [
    {
      title: "Lengkapi informasi mempelai",
      description: "Tambahkan detail informasi kamu dan pasangan.",
      icon: "👥"
    },
    {
      title: "Tambahkan detail informasi acara",
      description: "Isi bagian ini untuk detail informasi acara, dari nama acara, waktu, hingga detail lokasi.",
      icon: "📅"
    },
    {
      title: "Atur RSVP tamu",
      description: "Tampilkan dan atur batas akhir tamu dapat mengisi RSVP agar data konfirmasi kehadiran tamu kamu lebih akurat.",
      icon: "✅"
    },
    {
      title: "Ceritakan tentang perjalanan kalian",
      description: "Bagikan kisah unik kamu dan pasangan kepada para tamu.",
      icon: "💕"
    },
    {
      title: "Tambahkan dokumentasi bahagiamu di galeri",
      description: "Kamu bisa menambahkan foto-foto preweddingmu atau video dokumentasi lainnya.",
      icon: "📸"
    },
    {
      title: "Hadiah Pernikahan",
      description: "Tambahkan informasi rekening, dompet digital, atau rekomendasi kado dan detail alamat pengiriman untuk memudahkan tamu memberi hadiah pernikahanmu!",
      icon: "🎁"
    },
    {
      title: "Tamu tetap bisa menikmati acaramu walau tidak hadir",
      description: "Tambahkan link dari berbagai platform yang tersedia untuk kamu dapat melakukan live streaming.",
      icon: "📺"
    },
    {
      title: "Abadikan momen dengan filter instagram",
      description: "Kamu bisa menambahkan link filter instagram, bahkan lebih dari satu untuk dapat digunakan para tamu langsung.",
      icon: "📱"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-boxing text-katsudoto-teal mb-6">
            Mulai dengan lengkapi data undangan kamu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-katsudoto-cream rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-katsudoto-teal mb-4">
                {step.title}
              </h3>
              <p className="text-katsudoto-teal leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessStepsSection
