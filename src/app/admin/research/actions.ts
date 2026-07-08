'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteResearchProduct(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('marungga_research_products')
    .delete()
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/research')
  revalidatePath('/about')
  return { success: true }
}

export async function saveResearchMember(formData: FormData) {
  const supabase = await createClient()
  
  const id = formData.get('id') as string | null
  const title = formData.get('title') as string
  const order_index = formData.get('order_index') as string | null
  const image_file = formData.get('image_file') as File | null

  if (!title) {
    return { error: 'Title is required.' }
  }

  let cover_url = formData.get('cover_url') as string | null;

  if (image_file && image_file.size > 0) {
    if (image_file.size > 1024 * 1024) {
      return { error: 'Image size must be less than 1MB.' }
    }
    const fileExt = image_file.name.split('.').pop()
    const fileName = `research_${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
    const filePath = `research/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('marungga-public')
      .upload(filePath, image_file)

    if (uploadError) {
      return { error: 'Failed to upload image: ' + uploadError.message }
    }

    const { data: publicUrlData } = supabase.storage
      .from('marungga-public')
      .getPublicUrl(filePath)
    
    cover_url = publicUrlData.publicUrl
  }

  const payload: any = {
    title,
    order_index: order_index ? parseInt(order_index) : 0
  }

  if (cover_url) {
    payload.cover_url = cover_url;
  }

  let error;

  if (id) {
    const { error: updateError } = await supabase
      .from('marungga_research_products')
      .update(payload)
      .eq('id', id)
    error = updateError
  } else {
    const { error: insertError } = await supabase
      .from('marungga_research_products')
      .insert([payload])
    error = insertError
  }

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/research')
  revalidatePath('/about')
  redirect('/admin/research')
}
