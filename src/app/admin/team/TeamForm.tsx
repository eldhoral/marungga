'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { saveTeamMember } from './actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type TeamMember = {
  id?: string
  name: string
  role: string
  department?: string | null
  order_index?: number
  image_url?: string | null
}

export function TeamForm({ member }: { member?: TeamMember }) {
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
      setError('Image size must be less than 1MB')
      setIsLoading(false)
      return
    }

    if (member?.id) {
      formData.append('id', member.id)
    }

    const result = await saveTeamMember(formData)
    
    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{member ? 'Edit Team Member' : 'Add Team Member'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" defaultValue={member?.name} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role / Position *</Label>
              <Input id="role" name="role" defaultValue={member?.role} required placeholder="e.g. Koordinator" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" name="department" defaultValue={member?.department || ''} placeholder="e.g. Riset & Dokumentasi" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order_index">Order Index (Lower comes first)</Label>
              <Input id="order_index" name="order_index" type="number" defaultValue={member?.order_index?.toString() || '0'} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">Photo</Label>
            <div className="flex flex-col gap-2">
              {member?.image_url && (
                <div className="text-sm text-gray-500 mb-2">
                  Current photo: {member.image_url.substring(0, 50)}...
                </div>
              )}
              <Input id="image_file" name="image_file" type="file" accept="image/*" />
              <p className="text-xs text-gray-500">Upload a new photo (will overwrite current photo if any)</p>
            </div>
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/admin/team">
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
