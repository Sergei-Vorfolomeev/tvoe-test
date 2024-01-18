import React, { useEffect, useState } from 'react'
import s from './main-page.module.scss'
import { Header } from '@/components/header'
import { MovieCardType } from '@/components/new-movies/movie-card/movie-card.types'
import { InferGetStaticPropsType } from 'next'
import { NewMovies } from '@/components/new-movies/new-movies'
import blueBugImg from '../../assets/img/blue-bug.png'
import homeGameImg from '../../assets/img/home-game.png'
import salutImg from '../../assets/img/salut.png'
import catchMeImg from '../../assets/img/catch-me.png'
import myUnhappinessImg from '../../assets/img/my-unhappiness.png'
import redNotificationImg from '../../assets/img/red-notification.png'
import theWitcherImg from '../../assets/img/the-witcher.png'
import { Top10 } from '@/components/top10/top10'

const NEW_MOVIES: MovieCardType[] = [
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

const TOP_10: Pick<MovieCardType, 'img'>[] = [
    { img: myUnhappinessImg },
    { img: redNotificationImg },
    { img: theWitcherImg },
]

const MainPage = () => {
    return (
        <div className={s.mainContainer}>
            <Header />
            <NewMovies movies={NEW_MOVIES} />
            <Top10 movies={TOP_10} />
        </div>
    )
}

export default MainPage
