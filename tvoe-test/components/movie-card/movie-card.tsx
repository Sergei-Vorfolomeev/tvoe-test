'use client'
import s from './movie-card.module.scss'
import Image from 'next/image'
import { Typography } from '@/components'
import { useRouter } from 'next/navigation'
import { MovieCardType } from '@/models/types'

type MovieCardProps = {
  card: MovieCardType
}

export const MovieCard = ({ card }: MovieCardProps) => {
  const router = useRouter()
  return (
    <div
      className={s.cardContainer}
      onClick={() => {
        if (card.id === '1') router.push('/movie-page?season=1')
      }}
    >
      <Image src={card.img} alt={card.name ?? ''} className={s.cardImg} />
      {card.rating && <div className={s.rating}>{card.rating}</div>}
      <Typography>{card.name}</Typography>
    </div>
  )
}
