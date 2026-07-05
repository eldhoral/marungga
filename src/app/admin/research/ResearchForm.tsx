'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { saveResearchMember } from './actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type ResearchProduct = {
  id?: string
  title: string
  cover_url?: string | null
  order_index?: number
}

export function ResearchForm({ product }: { product?: ResearchProduct }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    if (product?.id) {
      formData.append('id', product.id)
    }

    const result = await saveResearchMember(formData)
    
    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product ? 'Edit Research Product' : 'Add Research Product'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Book Title *</Label>
            <Input id="title" name="title" defaultValue={product?.title} required placeholder="e.g. Panduan Penyelenggaraan..." />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="image_file">Cover Image</Label>
              <Input id="image_file" name="image_file" type="file" accept="image/*" />
              <p className="text-sm text-gray-500">Max size 1MB. Allowed types: jpg, png, webp.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="order_index">Order Index</Label>
              <Input id="order_index" name="order_index" type="number" defaultValue={product?.order_index || 0} />
              <p className="text-sm text-gray-500">Lower numbers appear first.</p>
            </div>
          </div>

          {product?.cover_url && (
            <div className="text-sm text-gray-500">
              Current cover: {product.cover_url.split('/').pop()}
            </div>
          )}

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/admin/research">
            <Button type="button" variant="outline">Cancel</Button>
          </Link>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Member'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
