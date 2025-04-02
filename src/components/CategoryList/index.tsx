import { useMemo } from 'react'
import {
  icoDiamond,
  icoGames,
  icoHotMatch,
  icoP2pTransaction,
  icoPromotion,
  icoProviders,
  icoSearch,
  icoVip
} from '../../assets/images'
import { useMobile } from '../../hooks/useMobile'
import { CategoryItem, type Category } from './CategoryItem'

const dummyCategoriesForPc: Category[] = [
  {
    label: 'Diamond',
    icon: icoDiamond
  },
  {
    label: 'VIP',
    icon: icoVip
  },
  {
    label: 'Promotion',
    icon: icoPromotion
  },
  {
    label: 'Hot Match',
    icon: icoHotMatch
  },
  {
    label: 'P2P Transaction',
    icon: icoP2pTransaction
  },
  {
    label: 'Games',
    icon: icoGames,
    isButton: true
  },
  {
    label: 'Providers',
    icon: icoProviders,
    isButton: true
  }
]

const dummyCategoriesForMobile: Category[] = [
  {
    label: 'Search',
    icon: icoSearch
  },
  {
    label: 'Games',
    icon: icoGames,
    isButton: true
  },
  {
    label: 'Providers',
    icon: icoProviders,
    isButton: true
  }
]

export const CategoryList = () => {
  const isMobile = useMobile()
  const dummyCategories = useMemo(() => {
    if (isMobile) return dummyCategoriesForMobile
    return dummyCategoriesForPc
  }, [isMobile])

  return (
    <div className="category-list">
      {dummyCategories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  )
}
