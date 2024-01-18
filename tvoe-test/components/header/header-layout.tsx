import React, { ReactNode } from 'react'
import s from './header.module.scss'
import { StaticImageData } from 'next/image'

type HeaderLayoutProps = {
    img: ReactNode
    caption: ReactNode
    actions: ReactNode
}

export const HeaderLayout = ({ img, caption, actions }: HeaderLayoutProps) => {
    return (
        <header className={s.container}>
            <div className={s.coverContainer}>{img}</div>
            <div className={s.captionContainer}>
                {caption}
                {actions}
            </div>
        </header>
    )
}
