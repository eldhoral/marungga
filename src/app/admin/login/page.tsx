'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Button from '@/components/Button'
import { login } from './actions'
import { ShieldCheck } from 'lucide-react'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const router = useRouter()
  const turnstileRef = useRef<TurnstileInstance | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    
    if (!captchaToken) {
      setError('Silakan selesaikan CAPTCHA terlebih dahulu')
      return
    }

    setIsLoading(true)
    const formData = new FormData(e.currentTarget)
    formData.append('cf-turnstile-response', captchaToken)
    
    const result = await login(formData)
    
    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
      setCaptchaToken(null)
      turnstileRef.current?.reset()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface relative overflow-hidden p-4">
      {/* Decorative Blobs */}
      <div className="blob blob-primary" style={{ top: '-10%', left: '-10%', width: '500px', height: '500px', opacity: 0.1 }}></div>
      <div className="blob blob-secondary" style={{ bottom: '-10%', right: '-10%', width: '400px', height: '400px', opacity: 0.1 }}></div>
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-border/50 p-8 md:p-10 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary-dark mb-2">Admin Portal</h1>
          <p className="text-muted-foreground">
            Masuk untuk mengelola konten dan program Yayasan Marungga
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-text font-medium">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="admin@marungga.org" 
              required 
              className="rounded-xl border-border focus-visible:ring-primary h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-text font-medium">Password</Label>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="rounded-xl border-border focus-visible:ring-primary h-12"
            />
          </div>
          
          <div className="flex justify-center py-2">
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'} // fallback to testing key
              onSuccess={(token) => setCaptchaToken(token)}
              options={{
                theme: 'light'
              }}
            />
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600 font-medium text-center">
              {error}
            </div>
          )}
          
          <Button type="submit" variant="primary" className="w-full h-12 text-lg" disabled={isLoading}>
            {isLoading ? 'Mengautentikasi...' : 'Masuk Dashboard'}
          </Button>
        </form>
      </div>
    </div>
  )
}
