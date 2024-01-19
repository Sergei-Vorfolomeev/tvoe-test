import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { clsx } from 'clsx'
import s from './button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  variant?: 'primary' | 'secondary' | 'link'
  like?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  variant = 'primary',
  like,
  className,
  children,
  disabled,
  onClick,
  ...rest
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = like || 'button'
  return (
    <Component
      onClick={onClick}
      disabled={disabled}
      className={clsx(s[variant], className)}
      {...rest}
    >
      {children}
    </Component>
  )
}
