import s from './main-page.module.scss'
import { NewMovies } from '@/components/new-movies/new-movies'
import { Top10 } from '@/components/top10'
import { MainHeader } from '@/components/main-header'
import { NEW_MOVIES, TOP_10 } from '@/models/data'

const MainPage = () => {
  return (
    <div className={s.mainContainer}>
      <MainHeader />
      <NewMovies movies={NEW_MOVIES} />
      <Top10 movies={TOP_10} />
    </div>
  )
}

export default MainPage
