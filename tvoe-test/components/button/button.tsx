import React, { ComponentPropsWithoutRef, ElementType } from 'react'
import { clsx } from 'clsx'
import s from './button.module.scss'

type ButtonProps<T extends ElementType> = {
    variant?: 'primary' | 'secondary' | 'link'
    as?: T
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType>({
    variant = 'primary',
    as,
    className,
    children,
    disabled,
    onClick,
    ...rest
}: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
    const Component = as || 'button'
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
