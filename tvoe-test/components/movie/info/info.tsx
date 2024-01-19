import { MovieType } from '@/models/types'
import s from './info.module.scss'
import React from 'react'
import { Typography } from '@/components'

type InfoProps = {
  movie: MovieType
}

export const Info = ({ movie }: InfoProps) => {
  return (
    <>
      <Typography variant={'title1'} as={'h1'} className={s.title}>
        Информация
      </Typography>
      <div className={s.info}>
        <div className={s.wrapper}>
          <div className={s.infoCapture}>Премьера в мире</div>
          <div className={s.value}>{movie.premiereDate}</div>
          <div className={s.infoCapture}>Оригинальное название</div>
          <div className={s.value}>{movie.origName}</div>
        </div>
        <div className={s.wrapper}>
          <div className={s.infoCapture}>Страна</div>
          <div className={s.value}>{movie.country}</div>
          <div className={s.infoCapture}>Жанры</div>
          <div className={s.value}>{movie.genre.join(', ')}</div>
        </div>
        <div className={s.wrapper}>
          <div className={s.infoCapture}>Язык аудиодорожки</div>
          <div className={s.value}>{movie.audioLanguage.join(', ')}</div>
          <div className={s.infoCapture}>Качество</div>
          <div className={s.value}>{movie.quality}</div>
        </div>
      </div>
    </>
  )
}
