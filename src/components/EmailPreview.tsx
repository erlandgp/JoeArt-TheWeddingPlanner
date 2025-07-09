'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Mail, Send, CheckCircle } from 'lucide-react'

interface EmailPreviewProps {
  weddingData: {
    brideName: string
    groomName: string
    weddingDate: string
    venue: string
    packageName: string
  }
}

export default function EmailPreview({ weddingData }: EmailPreviewProps) {
  const [recipientEmail, setRecipientEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const emailTemplate = `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%); padding: 40px 20px;">
      <div style="background: white; border-radius: 20px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ec4899; font-size: 28px; margin: 0; font-weight: bold;">💕 JoeArt Wedding</h1>
          <p style="color: #6b7280; margin: 10px 0 0 0;">You're Invited to Our Special Day</p>
        </div>

        <div style="text-align: center; margin: 40px 0;">
          <h2 style="color: #1f2937; font-size: 32px; margin: 0; font-family: 'Times New Roman', serif;">${weddingData.brideName} & ${weddingData.groomName}</h2>
          <p style="color: #6b7280; margin: 20px 0; font-size: 18px;">are getting married!</p>
        </div>

        <div style="background: #f9fafb; border-radius: 15px; padding: 30px; margin: 30px 0;">
          <div style="display: flex; align-items: center; margin-bottom: 20px;">
            <span style="font-size: 24px; margin-right: 10px;">📅</span>
            <div>
              <h3 style="color: #1f2937; margin: 0; font-size: 16px;">Tanggal</h3>
              <p style="color: #6b7280; margin: 5px 0 0 0;">${weddingData.weddingDate}</p>
            </div>
          </div>

          <div style="display: flex; align-items: center;">
            <span style="font-size: 24px; margin-right: 10px;">📍</span>
            <div>
              <h3 style="color: #1f2937; margin: 0; font-size: 16px;">Lokasi</h3>
              <p style="color: #6b7280; margin: 5px 0 0 0;">${weddingData.venue}</p>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin: 40px 0;">
          <p style="color: #6b7280; font-style: italic; margin: 0;">
            "Dua hati yang bersatu dalam cinta, mengundang Anda untuk menyaksikan awal perjalanan baru kami."
          </p>
        </div>

        <div style="text-align: center;">
          <a href="#" style="background: #ec4899; color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">RSVP Sekarang</a>
        </div>

        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Undangan digital ini dibuat dengan ❤️ oleh JoeArt Wedding
            <br/>Package: ${weddingData.packageName}
          </p>
        </div>
      </div>
    </div>
  `

  const sendPreviewEmail = async () => {
    if (!recipientEmail) return

    setIsLoading(true)

    try {
      // Check if EmailJS environment variables are set
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const templateParams = {
        to_email: recipientEmail,
        to_name: 'Wedding Guest',
        bride_name: weddingData.brideName,
        groom_name: weddingData.groomName,
        wedding_date: weddingData.weddingDate,
        venue: weddingData.venue,
        package_name: weddingData.packageName,
        email_content: emailTemplate
      };

      // Initialize EmailJS with the user ID from environment variables
      emailjs.init(userId);
      
      // Send the email
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      console.log('Email sent successfully:', response);
      setEmailSent(true);
      setRecipientEmail(''); // Clear the email field after successful send
      
      // Reset the success message after 5 seconds
      setTimeout(() => setEmailSent(false), 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      // Show error to user
      alert(`Gagal mengirim email: ${error instanceof Error ? error.message : 'Terjadi kesalahan'}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-2 border-pink-200">
        <div className="flex items-center mb-4">
          <Mail className="h-5 w-5 text-pink-500 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Preview Undangan Email</h3>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="recipient" className="text-sm font-medium text-gray-700">
              Email Penerima (untuk preview)
            </Label>
            <Input
              id="recipient"
              type="email"
              placeholder="contoh@email.com"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={() => setShowPreview(!showPreview)}
              variant="outline"
              className="flex-1"
            >
              {showPreview ? 'Sembunyikan Preview' : 'Lihat Preview'}
            </Button>

            <Button
              onClick={sendPreviewEmail}
              disabled={!recipientEmail || isLoading}
              className="flex-1 bg-pink-500 hover:bg-pink-600 text-white"
            >
              {isLoading ? (
                'Mengirim...'
              ) : emailSent ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Terkirim!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Kirim Preview
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {showPreview && (
        <Card className="p-6">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Preview Undangan Email:</h4>
          <div
            className="border rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: emailTemplate }}
          />
        </Card>
      )}
    </div>
  )
}
