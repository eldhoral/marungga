'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Tiptap } from '@/components/editor/Tiptap'
import { saveContentBlock } from './actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function ContentForm({ block }: { block: any }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [richText, setRichText] = useState(block.content_text)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    formData.append('id', block.id)
    
    // If it's richtext, we use the state instead of the default form input
    if (block.content_type === 'richtext') {
      formData.set('content_text', richText)
    }

    const result = await saveContentBlock(formData)
    
    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{block.page} / {block.section_key}</CardTitle>
        <CardDescription>Edit the wording for this section.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Content</Label>
            
            {block.content_type === 'text' && (
              <Input 
                name="content_text" 
                defaultValue={block.content_text} 
                required 
              />
            )}

            {block.content_type === 'textarea' && (
              <Textarea 
                name="content_text" 
                defaultValue={block.content_text} 
                required 
                rows={5}
              />
            )}

            {block.content_type === 'richtext' && (
              <Tiptap 
                content={block.content_text} 
                onChange={setRichText} 
              />
            )}
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/admin/content">
            <Button type="button" variant="outline">Cancel</Button>
          </Link>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Content'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
