import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'>

export const Button = ({ className, ...rest }: Props) => {
  return <button className={clsx('button', className)} {...rest}></button>
}
