import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlusCircle, Pencil, Trash2 } from 'lucide-react'
import { deleteVideo } from './actions'

export const dynamic = 'force-dynamic'

export default async function VideosPage() {
  const supabase = await createClient()
  
  const { data: videos, error } = await supabase
    .from('marungga_videos')
    .select('*')
    .order('order_index', { ascending: true })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Video Documentation</h1>
          <p className="text-gray-500 mt-2">Manage YouTube videos displayed on the homepage.</p>
        </div>
        <Link href="/admin/videos/new">
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Add Video
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 font-medium">Order</th>
                <th className="px-6 py-4 font-medium">Thumbnail</th>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-red-500">
                    Failed to load videos.
                  </td>
                </tr>
              ) : videos?.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    No videos found. Add one to get started.
                  </td>
                </tr>
              ) : (
                videos?.map((video) => (
                  <tr key={video.id} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="px-6 py-4">{video.order_index}</td>
                    <td className="px-6 py-4">
                      <div className="h-16 w-24 bg-gray-100 rounded overflow-hidden relative">
                        <img 
                          src={`https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg`} 
                          alt={video.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {video.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/videos/${video.id}`}>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Pencil className="h-4 w-4" /> Edit
                          </Button>
                        </Link>
                        <form action={async () => {
                          'use server'
                          await deleteVideo(video.id)
                        }}>
                          <Button variant="destructive" size="sm" className="flex items-center gap-2">
                            <Trash2 className="h-4 w-4" /> Delete
                          </Button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
