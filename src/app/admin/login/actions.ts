'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const captchaToken = formData.get('cf-turnstile-response') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }
  
  if (!captchaToken) {
    return { error: 'Please complete the captcha' }
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: {
      captchaToken
    }
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/admin')
}
