import { createClient } from '@/utils/supabase/server'
import { VideoForm } from '../VideoForm'
import { notFound } from 'next/navigation'

export default async function EditVideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient()
  
  const { data: video, error } = await supabase
    .from('marungga_videos')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !video) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Edit Video</h1>
        <p className="text-gray-500 mt-2">Update information for this YouTube video.</p>
      </div>
      
      <VideoForm video={video} />
    </div>
  )
}
