import { MovieCardType } from '@/components/new-movies/movie-card/movie-card.types'
import { Typography } from '@/components'
import { MovieCard } from '@/components/new-movies/movie-card/movie-card'
import s from './new-movies.module.scss'

type NewMoviesProps = {
    movies: MovieCardType[]
}

export const NewMovies = ({ movies }: NewMoviesProps) => {
    return (
        <section className={s.container}>
            <Typography variant={'title1'} as={'h1'} className={s.title}>
                Новинки
            </Typography>
            <div className={s.newMoviesContainer}>
                {movies?.map((el, index) => {
                    return <MovieCard key={index} card={el} />
                })}
            </div>
        </section>
    )
}
