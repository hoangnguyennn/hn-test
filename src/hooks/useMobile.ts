import { useEffect, useState } from 'react'

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1440)
    }

    handleResize()
    document.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}
