'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Heart, CreditCard } from 'lucide-react'
import OpenLayersMap from '@/components/OpenLayersMap'
import EmailPreview from '@/components/EmailPreview'
import PaymentIntegration from '@/components/PaymentIntegration'
import { GoogleSignInButton } from '@/components/GoogleSignInButton'

type FormData = {
  name: string
  email: string
  subject: string
  url: string
  eventDate: string
  eventTime: string
  readiness: string
  announcement: string
  weddingLocation: {
    lat: number
    lng: number
    address: string
  } | null
  selectedPackage: {
    name: string
    price: number
    features: string[]
    description: string
  } | null
  paymentId: string | null
}

export default function WeddingPlanner() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    url: '',
    eventDate: '',
    eventTime: '',
    readiness: '',
    announcement: '',
    weddingLocation: null,
    selectedPackage: null,
    paymentId: null
  })

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Wedding Photo */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />
        <img
          src={
            currentStep <= 2
              ? "https://images.pexels.com/photos/30372650/pexels-photo-30372650/free-photo-of-romantic-outdoor-pre-wedding-couple-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              : "https://www.weddingsinhouston.com/blog/wp-content/uploads/2022/03/ToriMilesRW_AmyMaddoxPhotography_ParvaniVida_Outdoorcouple2.jpg"
          }
          alt="Wedding Couple"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-12 left-12 text-white z-20 max-w-sm">
          {currentStep <= 2 && (
            <h2 className="text-3xl font-bold mb-4">Setiap hal hebat dimulai dengan satu langkah kecil.</h2>
          )}
          {currentStep >= 3 && currentStep <= 4 && (
            <h2 className="text-3xl font-bold mb-4">Kami seorang perjalanan baru sebagai pasangan suami istri akan segera dimulai</h2>
          )}
          {currentStep >= 5 && (
            <h2 className="text-3xl font-bold mb-4">Kami seorang perjalanannya kalian kasian suami istri akan segera dimulai</h2>
          )}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <Link href="/landing" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-bold text-gray-900 hover:text-pink-500 transition-colors">JoeArt</span>
          </Link>
          <div className="flex space-x-6 text-sm text-gray-600">
            <span className="hover:text-pink-500 cursor-pointer">👥 List Tamu</span>
            <span className="hover:text-pink-500 cursor-pointer">✨ Fitur Keren</span>
            <span className="hover:text-pink-500 cursor-pointer">💸 Harga Pas</span>
            <span className="hover:text-pink-500 cursor-pointer">📸 Gallery</span>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 pt-6">
          <div className="flex items-center space-x-2 mb-8">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 6 && (
                  <div className={`w-6 h-0.5 mx-1 ${
                    step < currentStep ? 'bg-pink-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 px-6 pb-6">
          {currentStep === 1 && (
            <div className="max-w-md">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Let's get started</h1>
              <p className="text-gray-600 mb-8">Kami akan memandu proses untuk membuat akun pernikahan.</p>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Informasi Mengenai *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subjek Undangan *
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => updateFormData('subject', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="url" className="text-sm font-medium text-gray-700">
                    URL Undangan Website
                  </Label>
                  <Input
                    id="url"
                    value={formData.url}
                    onChange={(e) => updateFormData('url', e.target.value)}
                    placeholder="joeart.com/acara"
                    className="mt-1"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="eventDate" className="text-sm font-medium text-gray-700">
                      Tanggal Acara *
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => updateFormData('eventDate', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventTime" className="text-sm font-medium text-gray-700">
                      Waktu Acara *
                    </Label>
                    <Input
                      id="eventTime"
                      type="time"
                      value={formData.eventTime}
                      onChange={(e) => updateFormData('eventTime', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="readiness" className="text-sm font-medium text-gray-700">
                    Sudah siapkah persiapan pernikahan Anda? *
                  </Label>
                  <div className="mt-2">
                    <select 
                      id="readiness"
                      value={formData.readiness}
                      onChange={(e) => updateFormData('readiness', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      required
                    >
                      <option value="">Pilih status kesiapan</option>
                      <option value="Belum Lamaran">Belum Lamaran</option>
                      <option value="Sudah Lamaran">Sudah Lamaran</option>
                      <option value="Sudah 50% Siap Nih">Sudah 50% Siap Nih</option>
                      <option value="100% Siap Sisa Undangan">100% Siap Sisa Undangan</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="max-w-md w-full">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Informasi Akun</h1>
              <p className="text-gray-600 mb-6">Buat akun atau masuk dengan Google untuk menyimpan data pernikahan Anda.</p>

              <div className="space-y-6">
                {/* Google Sign In Button */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Atau daftar dengan email</span>
                    </div>
                  </div>

                  <GoogleSignInButton />
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="mt-1"
                      placeholder="email@contoh.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Buat Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      className="mt-1"
                      placeholder="Minimal 8 karakter"
                      minLength={8}
                    />
                  </div>

                  <div className="text-xs text-gray-500">
                    <p>Dengan mendaftar, Anda menyetujui <a href="#" className="text-pink-500 hover:underline">Syarat dan Ketentuan</a> serta <a href="#" className="text-pink-500 hover:underline">Kebijakan Privasi</a> kami.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="max-w-lg">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Detail Pernikahan</h1>
              <p className="text-gray-600 mb-8">Silahkan masukkan detail pernikahan anda untuk mengatur aktivitas dan tujuan acara anda lebih baik.</p>

              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Di mana lokasi pernikahan kamu diselengarakan?
                  </Label>
                  <Input
                    placeholder="Masukan lokasi acara"
                    className="mt-1"
                  />
                </div>

                {/* Interactive OpenLayers Map */}
                <OpenLayersMap
                  onLocationSelect={(location) => {
                    setFormData(prev => ({
                      ...prev,
                      weddingLocation: location
                    }));
                  }}
                />

                <div>
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Alamat
                  </Label>
                  <Input
                    id="address"
                    placeholder="Masukan alamat lengkap"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                    Kota/Kab
                  </Label>
                  <Input
                    id="city"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="notes" className="text-sm font-medium text-gray-700">
                    Kode
                  </Label>
                  <Input
                    id="notes"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    Apakah rencana tamu yang menganyakan tahu acara penting??
                  </Label>
                  <div className="mt-2">
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                      <option>Pilih cara pemberitahuan</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="max-w-4xl">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Pilih dan Bayar Sesuai Kebutuhan</h1>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Fitur Dasar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Tamu Nggak Terbatas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Gallery Eksklusif 🖼️</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Live Streaming Kekinian 🎥</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Musik & Audio Joss 💿</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Dokumentasi Keren 📸</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Live Streaming App 📱</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Banyak Kategori Live 🏷️</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Musik & Email Notif 📧</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Gallery Kekinian 📱</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Ucapan Digital 💌</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Aplikasi Tamu Kekinian 📲</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Generator Maksimum</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Audio Free Streaming</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Live Video</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✓ Aplikasi Manual</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Rekomendasi Paket Terbaik Untuk Kebutuhanmu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Lamar Package */}
                  <Card className={`p-6 border-2 cursor-pointer transition-all hover:shadow-lg ${
                    formData.selectedPackage?.name === 'Lamar' ? 'border-pink-500 bg-pink-50' : 'border-pink-200 hover:border-pink-300'
                  }`}
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    selectedPackage: {
                      name: 'Lamar',
                      price: 400000,
                      features: [
                        '🎵 Musik Romantis Full', 
                        '🎥 Live Streaming HD', 
                        '💌 Notifikasi Otomatis', 
                        '📸 Galeri Foto Digital', 
                        '✨ Efek Khusus', 
                        '🖼️ 55+ Template Keren', 
                        '🎮 Game Interaktif', 
                        '📅 Countdown Acara'
                      ],
                      description: 'Paket cocok buat lamaran spesialmu dengan fitur kekinian yang bikin makin romantis! 💖'
                    }
                  }))}>
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-pink-600">Paket Lamar</h3>
                      <div className="text-3xl font-bold text-gray-900 mt-2">400K</div>
                      <p className="text-sm text-gray-600">Hemat Banget!</p>
                      <p className="text-sm text-pink-500 font-medium mt-1">🎉 Aktif 3 Tahun</p>
                    </div>
                    {formData.selectedPackage?.name === 'Lamar' && (
                      <div className="mt-4 p-2 bg-pink-100 rounded-full text-center animate-pulse">
                        <p className="text-sm text-pink-700 font-medium">✓ Kamu Pilih Paket Ini!</p>
                      </div>
                    )}
                  </Card>

                  {/* Mantu Package */}
                  <Card className={`p-6 border-2 cursor-pointer transition-all hover:shadow-lg ${
                    formData.selectedPackage?.name === 'Mantu' ? 'border-green-500 bg-green-50' : 'border-green-200 hover:border-green-300'
                  }`}
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    selectedPackage: {
                      name: 'Mantu',
                      price: 500000,
                      features: [
                        '🎵 Musik Premium Full', 
                        '🌿 Green Screen Eksklusif', 
                        '✉️ Broadcast Pesan Otomatis', 
                        '🖼️ Frame Kustom', 
                        '🎮 Game RSVP Seru', 
                        '✨ Filter Instagrammable',
                        '📱 Aplikasi Tamu Digital',
                        '🎁 Bonus Template Eksklusif'
                      ],
                      description: 'Paket mantap buat hari bahagiamu! Semua fitur premium ada di sini 🎊'
                    }
                  }))}>
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-green-600">Paket Mantu</h3>
                      <div className="text-3xl font-bold text-gray-900 mt-2">500K</div>
                      <p className="text-sm text-gray-600">Best Seller! 🔥</p>
                      <p className="text-sm text-green-600 font-medium mt-1">💎 Aktif Selamanya!</p>
                    </div>
                    {formData.selectedPackage?.name === 'Mantu' && (
                      <div className="mt-4 p-2 bg-green-100 rounded-full text-center animate-pulse">
                        <p className="text-sm text-green-700 font-medium">✓ Kamu Pilih Paket Ini!</p>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="max-w-5xl">
              <div className="text-center mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Rekomendasi Paket Terbaik Untuk Kebutuhanmu</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Lamar Package */}
                <Card className="p-6 border border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-pink-600 mb-2">Lamar</h3>
                    <div className="text-3xl font-bold text-gray-900">400.000</div>
                    <p className="text-sm text-gray-600">per bulan</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm py-1">
                      <span className="text-pink-500 mr-3 text-lg">🎵</span>
                      <span>Musik Romantis Full</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-pink-500 mr-3 text-lg">🎥</span>
                      <span>Live Streaming HD</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-pink-500 mr-3 text-lg">📨</span>
                      <span>Notifikasi & Email Otomatis</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-pink-500 mr-3 text-lg">💑</span>
                      <span>Galeri Foto Kekasih</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-pink-500 mr-3 text-lg">✨</span>
                      <span>Efek Khusus Romantis</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-pink-500 mr-3 text-lg">🖼️</span>
                      <span>55+ Template Kekinian</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-pink-500 mr-3 text-lg">🎮</span>
                      <span>Game Interaktif Seru</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-pink-500 mr-3 text-lg">📅</span>
                      <span>Countdown Spesial</span>
                    </div>
                  </div>

                  <p className="text-center text-sm text-pink-600 font-medium mb-4">🎉 Aktif 3 Tahun</p>

                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    Pilih Paket Sekarang
                  </Button>
                </Card>

                {/* Mantu Package */}
                <Card className="p-6 border-2 border-green-200 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-green-600 mb-2">Paket Mantu</h3>
                    <div className="text-3xl font-bold text-gray-900">500K</div>
                    <p className="text-sm text-gray-600">Best Seller! 🔥</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm py-1">
                      <span className="text-green-500 mr-3 text-lg">🎵</span>
                      <span>Musik Premium Full</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-green-500 mr-3 text-lg">🌿</span>
                      <span>Efek Green Screen Kekinian</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-green-500 mr-3 text-lg">📝</span>
                      <span>Broadcast Pesan Otomatis</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-green-500 mr-3 text-lg">🖼️</span>
                      <span>Frame Kustom Eksklusif</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-green-500 mr-3 text-lg">🎮</span>
                      <span>Game RSVP Interaktif</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-green-500 mr-3 text-lg">✨</span>
                      <span>Filter Instagrammable</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-green-500 mr-3 text-lg">📱</span>
                      <span>Aplikasi Tamu Digital</span>
                    </div>
                    <div className="flex items-center text-sm py-1">
                      <span className="text-green-500 mr-3 text-lg">🎁</span>
                      <span>Bonus Template Eksklusif</span>
                    </div>
                  </div>

                  <p className="text-center text-sm text-green-600 font-medium mb-4">💎 Aktif Selamanya!</p>

                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Pilih Paket Premium
                  </Button>
                </Card>
              </div>

              {formData.selectedPackage && (
                <div className="mt-8">
                  <EmailPreview
                    weddingData={{
                      brideName: formData.name.split(' ')[0] || 'Pengantin',
                      groomName: formData.name.split(' ')[1] || 'Pengantin',
                      weddingDate: '12 Desember 2024',
                      venue: formData.weddingLocation?.address || 'Lokasi akan ditentukan',
                      packageName: formData.selectedPackage.name
                    }}
                  />
                </div>
              )}

              <div className="text-center mt-8">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-2xl font-bold">
                  Rp {formData.selectedPackage?.price.toLocaleString('id-ID') || '0'}
                </p>
                <Button
                  className="bg-pink-500 hover:bg-pink-600 text-white mt-4 px-8"
                  disabled={!formData.selectedPackage}
                >
                  Lanjut ke Pembayaran
                </Button>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="max-w-4xl">
              {formData.selectedPackage ? (
                <div>
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout & Pembayaran</h1>
                    <p className="text-gray-600">Selesaikan pembayaran untuk paket {formData.selectedPackage.name}</p>
                  </div>

                  <PaymentIntegration
                    package={formData.selectedPackage}
                    onPaymentSuccess={(paymentId) => {
                      setFormData(prev => ({ ...prev, paymentId }))
                    }}
                  />
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <div className="h-16 w-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                      💳
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pilih Paket Terlebih Dahulu</h3>
                  <p className="text-gray-600 mb-6">Silakan kembali ke langkah sebelumnya untuk memilih paket pernikahan</p>
                  <Button onClick={prevStep} variant="outline">
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Kembali ke Paket
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            {currentStep > 1 && (
              <Button
                onClick={prevStep}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Kembali</span>
              </Button>
            )}

            <div className="ml-auto">
              <Button
                onClick={nextStep}
                className="bg-black text-white hover:bg-gray-800 px-8 py-2 rounded-full"
              >
                Lanjut
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
