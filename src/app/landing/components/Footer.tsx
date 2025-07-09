'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-katsudoto-teal text-white py-16">
      <div className="container mx-auto px-4">
        {/* Instagram Follow Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-white/10 rounded-full px-8 py-4">
            <span className="text-lg font-medium">FOLLOW US ON INSTAGRAM</span>
            <span className="text-lg font-medium">FOLLOW US ON INSTAGRAM</span>
            <span className="text-lg font-medium">FOLLOW US ON INSTAGRAM</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold">JOEART</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Berdiri sejak 28 Juni 2001, JoeArt sudah melayani lebih dari 9660 pasangan.
              Kami hadir untuk membantu menyebarkan berita bahagia pernikahan dalam genggaman tanpa perlu keluar rumah
              dengan berbagai pilihan desain premium yang sudah diakui oleh seluruh customer kami.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Produk</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">Kalkulator Kebutuhan</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Undangan Website</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Digital Guestbook</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Wedding Planning</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Gabung Mitra</Link></li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="text-lg font-bold mb-4">Portofolio</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">Influencer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Semua Portofolio</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} JoeArt. All rights reserved.</p>
        </div>
      </div>

      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-katsudoto-green rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-katsudoto-teal">JOEART</div>
              <div className="text-sm text-gray-600">We'll get back to you immediately in 1x24 hour</div>
            </div>
          </div>
          <div className="text-sm text-gray-700 mb-3">
            Hallo JoeArt, Aku ada beberapa pertanyaan nih tentang layanan yang kalian tawarkan, mohon dibantu ya!
          </div>
          <Link
            href="https://wa.me/628156647377"
            target="_blank"
            className="bg-katsudoto-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors inline-block"
          >
            Mulai Chat
          </Link>
          <div className="text-xs text-gray-500 mt-2">by joeart.id</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
