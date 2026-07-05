'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function saveContentBlock(formData: FormData) {
  const supabase = await createClient()
  
  const id = formData.get('id') as string
  const content_text = formData.get('content_text') as string

  if (!id || !content_text) {
    return { error: 'Content is required.' }
  }

  const { error } = await supabase
    .from('marungga_content_blocks')
    .update({ content_text })
    .eq('id', id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/admin/content')
  revalidatePath('/')
  revalidatePath('/about')
  revalidatePath('/programs')
  revalidatePath('/contact')
  
  redirect('/admin/content')
}
