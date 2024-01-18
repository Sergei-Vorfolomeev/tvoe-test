import React from 'react'
import s from './series-page.module.scss'
import { SeriesHeader } from '@/components/series-header'
import {
    EpisodeType,
    Movie,
    SeasonType,
    SerialType,
} from '@/components/seasons'
import episode1Img from '../../assets/img/episode1.png'
import episode2Img from '../../assets/img/episode2.png'
import episode3Img from '../../assets/img/episode3.png'
import oceans8Img from '../../assets/img/oceans-8.png'
import encantoImg from '../../assets/img/encanto.png'
import kingstownImg from '../../assets/img/kingstown.png'
import redNotificationImg from '../../assets/img/redNot.png'
import blueBugImg from '../../assets/img/BB.png'
import nights5Img from '../../assets/img/5-nights.png'
import { MovieCardType } from '@/components/new-movies/movie-card/movie-card.types'

const EPISODES: EpisodeType[] = [
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

const SEASONS: SeasonType[] = [
    {
        id: '1',
        seasonNumber: 1,
        episodesCount: 3,
        episodes: EPISODES,
    },
]

const SERIAL: SerialType = {
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

const RECOMMENDATIONS: MovieCardType[] = [
    {
        img: oceans8Img,
    },
    {
        img: encantoImg,
    },
    {
        img: redNotificationImg,
    },
    {
        img: blueBugImg,
    },
    {
        img: kingstownImg,
    },
    {
        img: nights5Img,
    },
]

type Props = {}

const SeriesPage = ({}: Props) => {
    return (
        <>
            <SeriesHeader />
            <Movie serial={SERIAL} recommendations={RECOMMENDATIONS} />
        </>
    )
}

export default SeriesPage
