'use client'

import React from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Almeyda Nayara",
      role: "Content Creator",
      image: "https://ext.same-assets.com/217228340/2080300565.jpeg",
      text: "Jujur aku bener-bener merasa terbantu banget dengan adanya Digital Invitation dari Katsudoto karna aku jadi mudah buat kirim ke temen-temen aku dan jangkauannya lebih luas. Sekali lagi terimakasih banyak bantuannya Katsudoto, sukses terus!"
    },
    {
      name: "Marco & Deby",
      role: "Content Creator",
      image: "https://ext.same-assets.com/217228340/580527833.jpeg",
      text: "Terimakasih banyak Katsudoto karna kita sukaaaa banget sama undangannya dan temen-temen kita juga selalu bilang undangannya keren banget. Katsudoto juga selalu sabar sama ke BM-an Deby dan revisiannya! Sistemnya juga bagus banget kita dikasih dashboard untuk ngecek undangan yang udah diblast. Pokoknya bagusss bangetttt, recommend banget banget bangettt!"
    },
    {
      name: "Nanda Arsyinta",
      role: "Content Creator",
      image: "https://ext.same-assets.com/217228340/3370831942.jpeg",
      text: "Thank you so much Katsudoto, seneng banget dapet banyak compliment tentang motion invitation & web nya. Sukses selalu yaa!"
    },
    {
      name: "Tasya Revina",
      role: "Content Creator",
      image: "https://ext.same-assets.com/217228340/1131549230.jpeg",
      text: "Makasih Katsudoto udah support undangan kita yang pakai QR Code, jadi tamu yang hadir sesuai dengan yang dapet undangan dan tidak ada tamu yang tidak diundang."
    },
    {
      name: "Fathia Izzati",
      role: "Content Creator & Penyanyi",
      image: "https://ext.same-assets.com/217228340/3756690236.jpeg",
      text: "Katsudoto!!! Terima kasih banyak atas bantuannya dari awal sampe akhir loveee bgt sama servicenyaaa"
    },
    {
      name: "Ashilla Zahrantiara",
      role: "Penyanyi & Aktris",
      image: "https://ext.same-assets.com/217228340/2388493471.jpeg",
      text: "Terimakasih banyak Katsudoto! Bener-bener semua temenku yang ku kirim undangan ini bilang undangannya bagus.."
    },
    {
      name: "Nimaz Dewantari",
      role: "Aktris",
      image: "https://ext.same-assets.com/217228340/4277930170.jpeg",
      text: "Katsudoto pelayanannya memuaskan, ramah, dan juga ada fitur smart whatsapp jadi sekali klik undangan langsung kesebar, mudah banget!"
    },
    {
      name: "Valerie Krasnadewi",
      role: "Model",
      image: "https://ext.same-assets.com/217228340/1574563553.jpeg",
      text: "Gampang banget tinggal ke website karena dia user friendly, thank you Katsudoto!"
    },
    {
      name: "Riza Shahab",
      role: "Aktor",
      image: "https://ext.same-assets.com/217228340/1914670010.jpeg",
      text: "Thank you so much katsudoto .. makasih buat doanya, makasih jg undangan web nya bagus bgt & banyak temen2 ku yg suka"
    },
    {
      name: "Adiba Khanza",
      role: "Aktris",
      image: "https://ext.same-assets.com/217228340/3404939216.jpeg",
      text: "Terimakasih banyak Katsudoto udah mensupport acara kita. Bener-bener puas sama semua servicenya dan semua yang ada diundangannya! Sangat Recommended!"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-boxing text-katsudoto-teal mb-6">
            Ini Kata Mereka
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-katsudoto-cream rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-katsudoto-teal">{testimonial.name}</h4>
                  <p className="text-sm text-katsudoto-teal opacity-75">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-katsudoto-teal leading-relaxed text-sm italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
