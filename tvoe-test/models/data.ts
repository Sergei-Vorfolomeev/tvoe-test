import episode1Img from '@/assets/img/episode1.png'
import episode2Img from '@/assets/img/episode2.png'
import episode3Img from '@/assets/img/episode3.png'
import oceans8Img from '@/assets/img/oceans-8.png'
import encantoImg from '@/assets/img/encanto.png'
import redNotificationImg from '@/assets/img/red-notification.png'
import redNotificationSm from '@/assets/img/redNot.png'
import blueBugImgSm from '@/assets/img/BB.png'
import blueBugImg from '@/assets/img/blue-bug.png'
import kingstownImg from '@/assets/img/kingstown.png'
import nights5Img from '@/assets/img/5-nights.png'
import homeGameImg from '@/assets/img/home-game.png'
import salutImg from '@/assets/img/salut.png'
import catchMeImg from '@/assets/img/catch-me.png'
import myUnhappinessImg from '@/assets/img/my-unhappiness.png'
import theWitcherImg from '@/assets/img/the-witcher.png'
import {
  EpisodeType,
  MovieCardType,
  MovieType,
  SeasonType,
} from '@/models/types'

export const NEW_MOVIES: MovieCardType[] = [
  { id: '1', name: 'Синий жук', rating: '10', img: blueBugImg },
  { id: '2', name: 'Домашняя игра', rating: '6,9', img: homeGameImg },
  { id: '3', name: 'Салют 7', rating: '5,8', img: salutImg },
  {
    id: '4',
    name: 'Поймай меня, если сможешь',
    rating: '7,0',
    img: catchMeImg,
  },
]

export const TOP_10: Pick<MovieCardType, 'img'>[] = [
  { img: myUnhappinessImg },
  { img: redNotificationImg },
  { img: theWitcherImg },
]

export const EPISODES: EpisodeType[] = [
  {
    episodeNumber: 1,
    duration: 43,
    cover: episode1Img,
  },
  {
    episodeNumber: 2,
    duration: 41,
    cover: episode2Img,
  },
  {
    episodeNumber: 3,
    duration: 38,
    cover: episode3Img,
  },
]

export const SEASONS: SeasonType[] = [
  {
    id: '1',
    seasonNumber: 1,
    episodesCount: 3,
    episodes: EPISODES,
  },
]

export const SERIAL: MovieType = {
  title: 'Уэнздей',
  origName: 'Wednesday',
  description:
    'Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.',
  seasonsCount: 3,
  seasons: SEASONS,
  premiereDate: '31 октября 2022',
  country: 'США',
  genre: ['Фентези', 'Комедия', 'Криминал', 'Детектив'],
  audioLanguage: ['Rus', 'Eng'],
  quality: 'Full HD',
}

export const RECOMMENDATIONS: MovieCardType[] = [
  { img: oceans8Img },
  { img: encantoImg },
  { img: redNotificationSm },
  { img: blueBugImgSm },
  { img: kingstownImg },
  { img: nights5Img },
]
