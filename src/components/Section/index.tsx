import { type PropsWithChildren } from 'react'

export const Section = ({ children }: PropsWithChildren) => {
  return <div className="section">{children}</div>
}

const SectionHeader = ({ children }: PropsWithChildren) => {
  return <div className="section-header">{children}</div>
}

Section.Header = SectionHeader

const SectionBody = ({ children }: PropsWithChildren) => {
  return <div className="section-body">{children}</div>
}

Section.Body = SectionBody
