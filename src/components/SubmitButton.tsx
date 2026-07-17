'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { ComponentProps } from 'react'

interface SubmitButtonProps extends ComponentProps<typeof Button> {
  loadingText?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function SubmitButton({ children, loadingText, icon, ...props }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} {...props}>
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          {loadingText || 'Loading...'}
        </>
      ) : (
        <>
          {icon && <span className="mr-1">{icon}</span>}
          {children}
        </>
      )}
    </Button>
  )
}
