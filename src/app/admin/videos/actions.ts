'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

// Helper to extract YouTube ID from various URL formats
function extractYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

export async function saveVideo(formData: FormData) {
  const supabase = await createClient()
  
  const id = formData.get('id') as string | null
  const title = formData.get('title') as string
  const youtube_url = formData.get('youtube_url') as string
  const order_index = formData.get('order_index') as string | null

  if (!title || !youtube_url) {
    return { error: 'Title and YouTube URL are required.' }
  }

  const youtube_id = extractYouTubeId(youtube_url)
  if (!youtube_id) {
    return { error: 'Invalid YouTube URL. Please provide a valid link.' }
  }

  const payload: any = {
    title,
    youtube_id,
    order_index: order_index ? parseInt(order_index) : 0
  }

  let error;
  if (id) {
    const { error: updateError } = await supabase
      .from('marungga_videos')
      .update(payload)
      .eq('id', id)
    error = updateError
  } else {
    const { error: insertError } = await supabase
      .from('marungga_videos')
      .insert([payload])
    error = insertError
  }

  if (error) {
    console.error('Save Video Error:', error)
    return { error: 'Failed to save video.' }
  }

  revalidatePath('/admin/videos')
  revalidatePath('/')
  return { success: true }
}

export async function deleteVideo(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('marungga_videos')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Delete Error:', error)
    return { error: 'Failed to delete video.' }
  }

  revalidatePath('/admin/videos')
  revalidatePath('/')
  return { success: true }
}
