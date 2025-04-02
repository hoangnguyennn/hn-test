import { PropsWithChildren } from 'react'

export const FooterMenu = ({ children }: PropsWithChildren) => {
  return <div className="footer-menu">{children}</div>
}

const FooterMenuHeader = ({ children }: PropsWithChildren) => {
  return <h3 className="footer-menu-header">{children}</h3>
}

FooterMenu.Header = FooterMenuHeader

const FooterMenuList = ({ children }: PropsWithChildren) => {
  return <ul className="footer-menu-list">{children}</ul>
}

FooterMenu.List = FooterMenuList

const FooterMenuItem = ({ children }: PropsWithChildren) => {
  return <li className="footer-menu-item">{children}</li>
}

FooterMenu.Item = FooterMenuItem
