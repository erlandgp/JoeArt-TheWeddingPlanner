'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CreditCard, Shield, CheckCircle, AlertCircle } from 'lucide-react'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo')

interface PackageDetails {
  name: string
  price: number
  features: string[]
  description: string
}

interface PaymentFormProps {
  package: PackageDetails
  onPaymentSuccess: (paymentId: string) => void
}

function PaymentForm({ package: pkg, onPaymentSuccess }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) return

    setIsLoading(true)
    setPaymentStatus('processing')
    setErrorMessage('')

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) return

    try {
      // Create payment method
      const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
        },
      })

      if (paymentMethodError) {
        throw new Error(paymentMethodError.message)
      }

      // In a real implementation, you would send this to your backend
      // For demo purposes, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Simulate success
      const mockPaymentId = `pay_${Math.random().toString(36).substr(2, 9)}`
      setPaymentStatus('success')
      onPaymentSuccess(mockPaymentId)

    } catch (error) {
      setPaymentStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Terjadi kesalahan dalam pembayaran')
    } finally {
      setIsLoading(false)
    }
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
    },
  }

  if (paymentStatus === 'success') {
    return (
      <Card className="p-8 text-center border-2 border-green-200">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Pembayaran Berhasil!</h3>
        <p className="text-gray-600 mb-4">
          Terima kasih telah memilih paket <strong>{pkg.name}</strong>
        </p>
        <p className="text-sm text-gray-500">
          Tim kami akan segera menghubungi Anda untuk memulai persiapan pernikahan impian Anda.
        </p>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="p-6 border-2 border-pink-200">
        <div className="flex items-center mb-4">
          <CreditCard className="h-5 w-5 text-pink-500 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Informasi Pembayaran</h3>
        </div>

        <div className="mb-6 p-4 bg-pink-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Paket {pkg.name}</h4>
          <p className="text-2xl font-bold text-pink-600 mb-2">Rp {pkg.price.toLocaleString('id-ID')}</p>
          <p className="text-sm text-gray-600">{pkg.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label htmlFor="name">Nama Lengkap *</Label>
            <Input
              id="name"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
              required
              className="mt-1"
            />
          </div>
        </div>

        <div className="mb-6">
          <Label htmlFor="phone">Nomor Telefon</Label>
          <Input
            id="phone"
            value={customerInfo.phone}
            onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
            className="mt-1"
          />
        </div>

        <div className="mb-6">
          <Label>Informasi Kartu Kredit *</Label>
          <div className="mt-2 p-3 border border-gray-300 rounded-md">
            <CardElement options={cardElementOptions} />
          </div>
        </div>

        {paymentStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-red-700 text-sm">{errorMessage}</span>
          </div>
        )}

        <div className="flex items-center mb-6 text-sm text-gray-600">
          <Shield className="h-4 w-4 text-green-500 mr-2" />
          Pembayaran Anda dilindungi dengan enkripsi SSL dan teknologi keamanan terdepan
        </div>

        <Button
          type="submit"
          disabled={!stripe || isLoading || !customerInfo.name || !customerInfo.email}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Memproses Pembayaran...
            </>
          ) : (
            `Bayar Rp ${pkg.price.toLocaleString('id-ID')}`
          )}
        </Button>
      </Card>
    </form>
  )
}

interface PaymentIntegrationProps {
  package: PackageDetails
  onPaymentSuccess: (paymentId: string) => void
}

export default function PaymentIntegration({ package: pkg, onPaymentSuccess }: PaymentIntegrationProps) {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm package={pkg} onPaymentSuccess={onPaymentSuccess} />
    </Elements>
  )
}
