import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'md:mx-auto w-full max-w-screen-xl px-2.5 md:px-16',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
