import { createClient } from '@/utils/supabase/server'
import { ContentForm } from '../ContentForm'
import { notFound } from 'next/navigation'

export default async function EditContentPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  
  const { data: block, error } = await supabase
    .from('marungga_content_blocks')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !block) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Edit Content</h1>
      </div>
      
      <ContentForm block={block} />
    </div>
  )
}
