import { type MovieCardType } from '@/components/movie-card/movie-card.types'
import { Typography, MovieCard } from '@/components'
import s from './new-movies.module.scss'

type NewMoviesProps = {
  movies: MovieCardType[]
}

export const NewMovies = ({ movies }: NewMoviesProps) => {
  return (
    <div className={s.container}>
      <Typography variant={'title1'} as={'h1'} className={s.title}>
        Новинки
      </Typography>
      <div className={s.newMoviesContainer}>
        {movies?.map((el, index) => {
          return <MovieCard key={index} card={el} />
        })}
      </div>
    </div>
  )
}
