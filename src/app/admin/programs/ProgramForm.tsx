'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { saveProgram } from './actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Program = {
  id?: string
  title: string
  year: string
  description: string
  location?: string | null
  category?: string | null
  image_url?: string | null
  order_index?: number
}

export function ProgramForm({ program }: { program?: Program }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    if (program?.id) {
      formData.append('id', program.id)
    }

    // TODO: Add image upload logic here before saving if a file is selected

    const result = await saveProgram(formData)
    
    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{program ? 'Edit Program' : 'Add New Program'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" name="title" defaultValue={program?.title} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Year / Date *</Label>
              <Input id="year" name="year" defaultValue={program?.year} required placeholder="e.g. 2023 or Okt - Des 2023" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" defaultValue={program?.location || ''} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category / Funding</Label>
              <Input id="category" name="category" defaultValue={program?.category || ''} />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="order_index">Order Index (Urutan)</Label>
            <Input id="order_index" name="order_index" type="number" defaultValue={program?.order_index || 0} />
            <p className="text-sm text-gray-500">Angka yang lebih kecil akan tampil lebih awal (di atas).</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea 
              id="description" 
              name="description" 
              defaultValue={program?.description} 
              required 
              rows={6}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">Image</Label>
            <div className="flex flex-col gap-2">
              {program?.image_url && (
                <div className="text-sm text-gray-500 mb-2">
                  Current image: {program.image_url.substring(0, 50)}...
                </div>
              )}
              <Input id="image_file" name="image_file" type="file" accept="image/*" />
              <p className="text-xs text-gray-500">Upload a new image (will overwrite current image if any)</p>
            </div>
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/admin/programs">
            <Button type="button" variant="outline">Cancel</Button>
          </Link>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Program'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
