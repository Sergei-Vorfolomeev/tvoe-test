import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './typography.module.scss'
import { clsx } from 'clsx'

type TypographyProps<T extends ElementType = 'p'> = {
    variant?: 'title' | 'body'
    as?: T
    children: ReactNode
    className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>({
    variant = 'body',
    as,
    className,
    children,
    ...rest
}: TypographyProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
    const Component = as || 'p'
    return (
        <Component className={clsx(s[variant], className)} {...rest}>
            {children}
        </Component>
    )
}
