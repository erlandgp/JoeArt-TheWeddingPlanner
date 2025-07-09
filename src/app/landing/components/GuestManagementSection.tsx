'use client'

import React from 'react'

const GuestManagementSection = () => {
  const methods = [
    {
      number: "01",
      title: "Tambah Tamu Manual",
      description: "Kamu bisa menambahkan langsung di dashboard pada menu kelola tamu dengan klik tombol tambah tamu.",
      images: [
        'https://ext.same-assets.com/217228340/3098301123.png',
        'https://ext.same-assets.com/217228340/409759864.png'
      ]
    },
    {
      number: "02",
      title: "Impor Data Tamu",
      description: "Lebih mudah tambah tamu dengan jumlah banyak menggunakan impor file ke dashboard.",
      images: [
        'https://ext.same-assets.com/217228340/1061596484.png',
        'https://ext.same-assets.com/217228340/2263888910.png'
      ]
    },
    {
      number: "03",
      title: "Bagikan Form untuk diisi langsung",
      description: "Kelompokkan tamu berdasarkan grup lalu salin link form yang tersedia, kemudian bagikan link untuk diisi calon tamu. Data tamu akan otomatis masuk ke dashboard.",
      images: [
        'https://ext.same-assets.com/217228340/1076323991.png'
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-katsudoto-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-boxing text-katsudoto-teal mb-6 leading-tight">
            Tambahkan data tamu dengan 3 cara yang berbeda. <br />
            Pilih cara yang kamu suka!
          </h2>
        </div>

        <div className="space-y-16">
          {methods.map((method, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <span className="text-5xl md:text-6xl font-boxing text-katsudoto-pink mr-6">
                    {method.number}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-katsudoto-teal mb-2">
                      {method.title}
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-katsudoto-teal leading-relaxed">
                  {method.description}
                </p>
              </div>

              {/* Images */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex gap-4 justify-center">
                  {method.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="flex-1 max-w-xs">
                      <img
                        src={img}
                        alt={`${method.title} example ${imgIndex + 1}`}
                        className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GuestManagementSection
