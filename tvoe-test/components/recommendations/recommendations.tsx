import React from 'react'
import { MovieCard, Typography } from '@/components'
import s from './recommendations.module.scss'
import { MovieCardType } from '@/components/movie-card/movie-card.types'

type RecommendationsProps = {
  recommendations: MovieCardType[]
}

export const Recommendations = ({ recommendations }: RecommendationsProps) => {
  return (
    <>
      <Typography variant={'title1'} as={'h1'} className={s.title}>
        Похожее
      </Typography>
      <div className={s.recommendationsContainer}>
        {recommendations?.map((el, index) => {
          return <MovieCard key={index} card={el} />
        })}
      </div>
    </>
  )
}
