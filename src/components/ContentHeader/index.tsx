import { type PropsWithChildren } from 'react'

export const ContentHeader = ({ children }: PropsWithChildren) => {
  return <div className="content-header">{children}</div>
}

const ContentHeaderTitle = ({ children }: PropsWithChildren) => {
  return <div className="content-header-title">{children}</div>
}

ContentHeader.Title = ContentHeaderTitle

const ContentHeaderAction = ({ children }: PropsWithChildren) => {
  return <div className="content-header-action">{children}</div>
}

ContentHeader.Action = ContentHeaderAction
