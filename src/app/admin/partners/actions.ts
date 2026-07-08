'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deletePartner(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('marungga_partners')
    .delete()
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/partners')
  revalidatePath('/about')
  return { success: true }
}

export async function savePartnerMember(formData: FormData) {
  const supabase = await createClient()
  
  const id = formData.get('id') as string | null
  const name = formData.get('name') as string
  const website_url = formData.get('website_url') as string | null
  const order_index = formData.get('order_index') as string | null
  const image_file = formData.get('image_file') as File | null

  if (!name) {
    return { error: 'Name is required.' }
  }

  let logo_url = formData.get('logo_url') as string | null;

  if (image_file && image_file.size > 0) {
    if (image_file.size > 1024 * 1024) {
      return { error: 'Image size must be less than 1MB.' }
    }
    const fileExt = image_file.name.split('.').pop()
    const fileName = `partners_${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
    const filePath = `partners/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('marungga-public')
      .upload(filePath, image_file)

    if (uploadError) {
      return { error: 'Failed to upload image: ' + uploadError.message }
    }

    const { data: publicUrlData } = supabase.storage
      .from('marungga-public')
      .getPublicUrl(filePath)
    
    logo_url = publicUrlData.publicUrl
  }

  const payload: any = {
    name,
    website_url,
    order_index: order_index ? parseInt(order_index) : 0
  }

  if (logo_url) {
    payload.logo_url = logo_url;
  }

  let error;

  if (id) {
    const { error: updateError } = await supabase
      .from('marungga_partners')
      .update(payload)
      .eq('id', id)
    error = updateError
  } else {
    const { error: insertError } = await supabase
      .from('marungga_partners')
      .insert([payload])
    error = insertError
  }

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/partners')
  revalidatePath('/about')
  redirect('/admin/partners')
}
