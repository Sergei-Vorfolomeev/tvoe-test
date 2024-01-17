import { MovieCardType } from '@/components/new-movies/movie-card/movie-card.types'
import s from './movie-card.module.scss'
import Image from 'next/image'
import { Typography } from '@/components'

type MovieCardProps = {
    card: MovieCardType
}

export const MovieCard = ({ card }: MovieCardProps) => {
    return (
        <div className={s.cardContainer}>
            <Image src={card.img} alt={card.name ?? ''} className={s.cardImg} />
            <div className={s.rating}>{card.rating}</div>
            <Typography>{card.name}</Typography>
        </div>
    )
}
