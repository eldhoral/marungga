'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteProgram(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('marungga_programs')
    .delete()
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/programs')
  revalidatePath('/programs')
  return { success: true }
}

export async function saveProgram(formData: FormData) {
  const supabase = await createClient()
  
  const id = formData.get('id') as string | null
  const title = formData.get('title') as string
  const year = formData.get('year') as string
  const description = formData.get('description') as string
  const location = formData.get('location') as string | null
  const category = formData.get('category') as string | null
  const order_index = formData.get('order_index') as string | null
  const image_file = formData.get('image_file') as File | null

  if (!title || !year || !description) {
    return { error: 'Title, year, and description are required.' }
  }

  let image_url = null;

  if (image_file && image_file.size > 0) {
    if (image_file.size > 1024 * 1024) {
      return { error: 'Image size must be less than 1MB.' }
    }
    const fileExt = image_file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
    const filePath = `programs/${fileName}`

    const { error: uploadError, data } = await supabase.storage
      .from('media')
      .upload(filePath, image_file)

    if (uploadError) {
      return { error: 'Failed to upload image: ' + uploadError.message }
    }

    const { data: publicUrlData } = supabase.storage
      .from('media')
      .getPublicUrl(filePath)
    
    image_url = publicUrlData.publicUrl
  }

  const payload: any = {
    title,
    year,
    description,
    location,
    category,
    order_index: order_index ? parseInt(order_index) : 0,
    updated_at: new Date().toISOString(),
  }

  if (image_url) {
    payload.image_url = image_url;
  }

  let error;

  if (id) {
    const { error: updateError } = await supabase
      .from('marungga_programs')
      .update(payload)
      .eq('id', id)
    error = updateError
  } else {
    const { error: insertError } = await supabase
      .from('marungga_programs')
      .insert([payload])
    error = insertError
  }

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/programs')
  revalidatePath('/programs')
  redirect('/admin/programs')
}
