'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { saveVideo } from './actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Video = {
  id?: string
  title: string
  youtube_id: string
  order_index?: number
}

export function VideoForm({ video }: { video?: Video }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    if (video?.id) {
      formData.append('id', video.id)
    }

    const result = await saveVideo(formData)
    
    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
    } else {
      router.push('/admin/videos')
    }
  }

  // Pre-fill full YouTube URL if editing
  const defaultUrl = video?.youtube_id ? `https://www.youtube.com/watch?v=${video.youtube_id}` : ''

  return (
    <Card>
      <CardHeader>
        <CardTitle>{video ? 'Edit Video' : 'Add Video'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Video Title *</Label>
            <Input id="title" name="title" defaultValue={video?.title} required placeholder="e.g. Profil Yayasan Marungga" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="youtube_url">YouTube URL *</Label>
            <Input 
              id="youtube_url" 
              name="youtube_url" 
              defaultValue={defaultUrl} 
              required 
              placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            />
            <p className="text-sm text-gray-500">Paste the full YouTube link here.</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="order_index">Order Index</Label>
            <Input id="order_index" name="order_index" type="number" defaultValue={video?.order_index || 0} />
            <p className="text-sm text-gray-500">Lower numbers appear first.</p>
          </div>

          {video?.youtube_id && (
            <div className="mt-4">
              <Label>Thumbnail Preview</Label>
              <div className="mt-2 rounded-md overflow-hidden" style={{ width: '200px', aspectRatio: '16/9' }}>
                <img src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/admin/videos">
            <Button variant="outline" type="button" disabled={isLoading}>Cancel</Button>
          </Link>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Video'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
