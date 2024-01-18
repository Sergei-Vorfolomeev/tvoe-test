'use client'
import { MovieCardType } from '@/components/new-movies/movie-card/movie-card.types'
import s from './movie-card.module.scss'
import Image from 'next/image'
import { Typography } from '@/components'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type MovieCardProps = {
    card: MovieCardType
}

export const MovieCard = ({ card }: MovieCardProps) => {
    const router = useRouter()
    return (
        <div
            className={s.cardContainer}
            onClick={() => {
                if (card.id === '1') router.push('/series-page')
            }}
        >
            <Image src={card.img} alt={card.name ?? ''} className={s.cardImg} />
            <div className={s.rating}>{card.rating}</div>
            <Typography>{card.name}</Typography>
        </div>
    )
}
