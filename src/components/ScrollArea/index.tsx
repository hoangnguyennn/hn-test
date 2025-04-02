import { type PropsWithChildren } from 'react'

export const ScrollArea = ({ children }: PropsWithChildren) => {
  return <div className="scroll-area">{children}</div>
}
