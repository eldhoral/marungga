'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Turnstile } from '@marsidev/react-turnstile'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { login } from './actions'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    
    if (!captchaToken) {
      setError('Please complete the CAPTCHA')
      return
    }

    setIsLoading(true)
    const formData = new FormData(e.currentTarget)
    formData.append('cf-turnstile-response', captchaToken)
    
    const result = await login(formData)
    
    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Enter your email and password to access the CMS
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="admin@marungga.org" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            
            <div className="flex justify-center pt-2">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'} // fallback to testing key
                onSuccess={(token) => setCaptchaToken(token)}
                options={{
                  theme: 'light'
                }}
              />
            </div>

            {error && (
              <div className="text-sm text-red-500 font-medium text-center">
                {error}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
