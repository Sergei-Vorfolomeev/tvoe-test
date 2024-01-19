import React from 'react'
import { Typography } from '@/components'
import s from './top10.module.scss'
import Image from 'next/image'
import { clsx } from 'clsx'
import { Archivo } from 'next/font/google'
import { MovieCardType } from '@/models/types'

const archivo = Archivo({
  weight: ['900'],
  subsets: ['latin'],
})

type Top10Props = {
  movies: Pick<MovieCardType, 'img'>[]
}

export const Top10 = ({ movies }: Top10Props) => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <span className={s.strokeText}>
          <i>ТОП-10</i>
        </span>
        <Typography variant={'title1'} as={'h1'}>
          просмотров за неделю
        </Typography>
      </div>
      <div className={s.top10Container}>
        {movies?.map((el, index) => (
          <div key={index} className={s.itemContainer}>
            <span className={clsx(s.strokeFigures, archivo.className)}>
              <i>{++index}</i>
            </span>
            <Image src={el.img} alt={'img'} className={s.img} />
          </div>
        ))}
      </div>
    </div>
  )
}
