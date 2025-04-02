type MenuItem = {
  label: string
  url: string
}

const dummyMenuItems: MenuItem[] = [
  {
    label: 'Home',
    url: '#'
  },
  {
    label: 'Game',
    url: '#'
  },
  {
    label: 'Infor',
    url: '#'
  },
  {
    label: 'News',
    url: '#'
  },
  {
    label: 'Promitions',
    url: '#'
  },
  {
    label: 'VIP',
    url: '#'
  }
]

export const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        {dummyMenuItems.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.url}>{menuItem.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
