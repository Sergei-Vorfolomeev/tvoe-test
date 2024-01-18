import React from 'react'
import logo from '../../assets/img/Logo.png'
import arrow from '../../assets/svg/arrow.svg'
import heart from '../../assets/svg/heart.svg'
import home from '../../assets/svg/home.svg'
import person from '../../assets/svg/person.svg'
import record from '../../assets/svg/record.svg'
import tv from '../../assets/svg/tv.svg'
import zoom from '../../assets/svg/zoom.svg'
import Image from 'next/image'
import s from './side-bar.module.scss'
import Link from 'next/link'

export const SideBar = () => {
    return (
        <nav className={s.nav}>
            <Link href={'/'}>
                <Image src={logo} alt={'logo'} className={s.logo} />
            </Link>

            <Image src={zoom} alt={'zoom'} className={s.item} />
            <Image src={home} alt={'home'} className={s.item} />
            <Image src={record} alt={'record'} className={s.item} />
            <Image src={tv} alt={'tv'} className={s.item} />
            <Image src={heart} alt={'heart'} className={s.item} />
            <Image src={person} alt={'person'} className={s.item} />
            <Image src={arrow} alt={'arrow'} className={s.arrow} />
        </nav>
    )
}
