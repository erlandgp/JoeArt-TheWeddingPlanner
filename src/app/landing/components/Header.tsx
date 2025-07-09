'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-katsudoto-teal text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/landing" className="text-xl font-bold">
              <span className="text-white">JOE</span>
              <span className="text-white">ART</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-200">
                <span>Rencanakan Pernikahan Kamu</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown would go here */}
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-200">
                <span>Panduan Pengguna</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <a href="#" className="hover:text-gray-200">Kerjasama Mitra</a>
            <a href="#" className="hover:text-gray-200">Undangan Event</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-gray-200 hover:bg-white/10">
              Masuk
            </Button>
            <Button className="bg-katsudoto-pink hover:bg-katsudoto-pink/90 text-white">
              Daftar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="space-y-4">
              <div className="space-y-2">
                <div className="font-medium">Plan your wedding</div>
                <ul className="pl-4 space-y-2 text-sm">
                  <li><a href="#" className="hover:text-gray-200">Undangan Website</a></li>
                  <li><a href="#" className="hover:text-gray-200">Buku Tamu Digital & QR</a></li>
                  <li><a href="#" className="hover:text-gray-200">Wedding Planner</a></li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="font-medium">Panduan Pengguna</div>
                <ul className="pl-4 space-y-2 text-sm">
                  <li><a href="#" className="hover:text-gray-200">Panduan Undangan Website</a></li>
                  <li><a href="#" className="hover:text-gray-200">Panduan Buku Tamu Digital & QR</a></li>
                  <li><a href="#" className="hover:text-gray-200">Wedding Planner</a></li>
                </ul>
              </div>

              <a href="#" className="block hover:text-gray-200">Kerjasama Mitra</a>
              <a href="#" className="block hover:text-gray-200">Undangan Event</a>

              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-white hover:text-gray-200 hover:bg-white/10">
                  Masuk
                </Button>
                <Button className="w-full bg-katsudoto-pink hover:bg-katsudoto-pink/90 text-white">
                  Daftar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
