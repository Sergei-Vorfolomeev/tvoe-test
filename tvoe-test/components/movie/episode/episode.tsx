import React from 'react'
import Image from 'next/image'
import { EpisodeType } from '@/components/movie'
import s from './episode.module.scss'
import { Typography } from '@/components'

type EpisodeProps = {
  episode: EpisodeType
}

export const Episode = ({ episode }: EpisodeProps) => {
  const getCase = (minutes: number): string => {
    const lastDigit = minutes % 10
    switch (true) {
      case lastDigit === 1:
        return 'минуту'
      case lastDigit >= 2 && lastDigit <= 4:
        return 'минуты'
      default:
        return 'минут'
    }
  }
  return (
    <div className={s.container}>
      <Image src={episode.cover} alt={'episode'} />
      <Typography variant={'body3'} className={s.episodeNumber}>
        {`${episode.episodeNumber} серия`}
      </Typography>
      <span className={s.duration}>
        {episode.duration} {getCase(episode.duration)}
      </span>
    </div>
  )
}
