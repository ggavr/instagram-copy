import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type PolyButtonProps<T extends ElementType = 'button'> = {
    as?: T
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
    fullWidth?: boolean
    className?: string
} & ComponentPropsWithoutRef<T>

export const PolyButton = <T extends ElementType = 'button'>(
    props: PolyButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof PolyButtonProps<T>>
) => {
    const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props

    return (
        <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
    )
}
