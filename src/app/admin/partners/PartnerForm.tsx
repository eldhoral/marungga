'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { savePartnerMember } from './actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Partner = {
  id?: string
  name: string
  logo_url?: string | null
  website_url?: string | null
  order_index?: number
}

export function PartnerForm({ partner }: { partner?: Partner }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    
    // File size validation (max 1MB)
    const file = formData.get('image_file') as File | null
    if (file && file.size > 1024 * 1024) {
      setError('Ukuran gambar maksimal adalah 1MB')
      setIsLoading(false)
      return
    }

    if (partner?.id) {
      formData.append('id', partner.id)
    }

    const result = await savePartnerMember(formData)
    
    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{partner ? 'Edit Partner' : 'Add Partner'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Partner Name *</Label>
              <Input id="name" name="name" defaultValue={partner?.name} required placeholder="e.g. UNICEF" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website_url">Website URL</Label>
              <Input id="website_url" name="website_url" defaultValue={partner?.website_url || ''} placeholder="https://..." />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="image_file">Logo Image</Label>
              <Input id="image_file" name="image_file" type="file" accept="image/*" />
              <p className="text-sm text-gray-500">Max size 1MB. Allowed types: jpg, png, webp.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="order_index">Order Index</Label>
              <Input id="order_index" name="order_index" type="number" defaultValue={partner?.order_index || 0} />
              <p className="text-sm text-gray-500">Lower numbers appear first.</p>
            </div>
          </div>

          {partner?.logo_url && (
            <div className="text-sm text-gray-500">
              Current logo: {partner.logo_url.split('/').pop()}
            </div>
          )}

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/admin/partners">
            <Button variant="outline" type="button" disabled={isLoading}>Cancel</Button>
          </Link>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Partner'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
