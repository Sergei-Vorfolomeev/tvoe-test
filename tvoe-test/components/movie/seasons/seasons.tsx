'use client'
import s from './seasons.module.scss'
import { Button, Episode, Typography } from '@/components'
import Link from 'next/link'
import { clsx } from 'clsx'
import { MovieType } from '@/models/types'
import { useSearchParams } from 'next/navigation'

type SeasonsProps = {
  movie: MovieType
}

export const Seasons = ({ movie }: SeasonsProps) => {
  const searchParams = useSearchParams()
  const seasonNumber = searchParams?.get('season')
  const season = movie.seasons.find((el) => el.id === seasonNumber)

  const seasonsButtons = Array.from(
    { length: movie.seasonsCount },
    (el, i) => ++i
  ).map((el) => (
    <Button
      key={el}
      variant={'secondary'}
      like={Link}
      href={'movie-page?season=[number]'}
      as={`movie-page?season=${el}`}
      className={clsx(
        s.seasonButton,
        seasonNumber && +seasonNumber == el ? s.active : ''
      )}
    >
      {el}
    </Button>
  ))

  return (
    <>
      <div className={s.titleAndButtons}>
        <Typography variant={'title1'} as={'h1'} className={s.title}>
          Сезоны
        </Typography>
        <div className={s.buttons}>{seasonsButtons}</div>
      </div>
      <div className={s.episodes}>
        {season?.episodes.map((episode) => (
          <Episode key={episode.episodeNumber} episode={episode} />
        ))}
      </div>
    </>
  )
}
