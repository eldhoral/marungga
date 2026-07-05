'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteTeamMember(id: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('marungga_team_members')
    .delete()
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/team')
  revalidatePath('/about')
  return { success: true }
}

export async function saveTeamMember(formData: FormData) {
  const supabase = await createClient()
  
  const id = formData.get('id') as string | null
  const name = formData.get('name') as string
  const role = formData.get('role') as string
  const department = formData.get('department') as string | null
  const order_index = formData.get('order_index') as string | null
  const image_file = formData.get('image_file') as File | null

  if (!name || !role) {
    return { error: 'Name and role are required.' }
  }

  let image_url = null;

  if (image_file && image_file.size > 0) {
    const fileExt = image_file.name.split('.').pop()
    const fileName = `team_${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
    const filePath = `team/${fileName}`

    const { error: uploadError } = await supabase.storage
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
    name,
    role,
    department,
    order_index: order_index ? parseInt(order_index) : 0
  }

  if (image_url) {
    payload.image_url = image_url;
  }

  let error;

  if (id) {
    const { error: updateError } = await supabase
      .from('marungga_team_members')
      .update(payload)
      .eq('id', id)
    error = updateError
  } else {
    const { error: insertError } = await supabase
      .from('marungga_team_members')
      .insert([payload])
    error = insertError
  }

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/team')
  revalidatePath('/about')
  redirect('/admin/team')
}
