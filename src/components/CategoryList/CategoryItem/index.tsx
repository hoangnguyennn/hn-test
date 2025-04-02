import clsx from 'clsx'

export type Category = {
  icon: string
  label: string
  isButton?: boolean
}

type Props = {
  category: Category
}

export const CategoryItem = ({ category }: Props) => {
  return (
    <div className={clsx('category-item', { 'is-button': category.isButton })}>
      <div className="category-icon">
        <img src={category.icon} alt={category.label} />
      </div>
      <div className="category-label">{category.label}</div>
    </div>
  )
}
