import React, { ReactNode } from 'react'
import { Seasons, Description, Info } from '@/components'
import s from './movie.module.scss'
import { MovieType } from '@/models/types'

export type MovieProps = {
  movie: MovieType
  recommendations: ReactNode
}

export const Movie = ({ movie, recommendations }: MovieProps) => {
  return (
    <div className={s.container}>
      <Seasons movie={movie} />
      <div className={s.descriptionContainer}>
        <Description description={movie.description} />
      </div>
      <div className={s.similarContainer}>{recommendations}</div>
      <div className={s.infoContainer}>
        <Info movie={movie} />
      </div>
    </div>
  )
}
