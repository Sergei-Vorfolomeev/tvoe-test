'use client'
import React from 'react'
import { Button, MovieCard, Typography } from '@/components'
import s from './movie.module.scss'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { StaticImageData } from 'next/image'
import { Episode } from '@/components/seasons/episode/episode'
import { Warning } from '@/assets/icons/warning'
import { MovieCardType } from '@/components/new-movies/movie-card/movie-card.types'

export type SerialType = {
    title: string
    origName: string
    description: string
    seasonsCount: number
    seasons: SeasonType[]
    premiereDate: string
    country: string
    genre: string[]
    audioLanguage: string[]
    quality: string
}
export type SeasonType = {
    id: string
    seasonNumber: number
    episodesCount: number
    episodes: EpisodeType[]
}
export type EpisodeType = {
    episodeNumber: number
    duration: number
    cover: StaticImageData
}

export type SeasonsProps = {
    serial: SerialType
    recommendations: MovieCardType[]
}

export const Movie = ({ serial, recommendations }: SeasonsProps) => {
    const searchParams = useSearchParams()
    const seasonNumber = searchParams?.get('season')

    const seasonsButtons = Array.from(
        { length: serial.seasonsCount },
        (el, i) => ++i
    ).map((el) => (
        <Button
            key={el}
            variant={'secondary'}
            like={Link}
            href={'series-page?season=[number]'}
            as={`series-page?season=${el}`}
            className={clsx(
                s.seasonButton,
                seasonNumber && +seasonNumber == el ? s.active : ''
            )}
        >
            {el}
        </Button>
    ))

    const season = serial?.seasons.find((el) => el.id === seasonNumber)

    return (
        <div className={s.container}>
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
            <div className={s.descriptionContainer}>
                <Typography variant={'title1'} as={'h1'}>
                    Описание
                </Typography>
                <Typography variant={'body2'} className={s.description}>
                    {serial.description}
                </Typography>
                <div className={s.warning}>
                    <Warning w={'50'} h={'50'} className={s.icon} />
                    <p>
                        Контент может содержать сцены курения и употребления
                        спиртных напитков. Курение и чрезмерное употребление
                        алкоголя вредит вашему здоровью.
                    </p>
                </div>
            </div>
            <div className={s.similarContainer}>
                <Typography variant={'title1'} as={'h1'}>
                    Похожее
                </Typography>
                <div className={s.recommendationsContainer}>
                    {recommendations?.map((el, index) => {
                        return <MovieCard key={index} card={el} />
                    })}
                </div>
            </div>
            <div className={s.infoContainer}>
                <Typography variant={'title1'} as={'h1'}>
                    Информация
                </Typography>
                <div className={s.info}>
                    <div className={s.wrapper}>
                        <div className={s.infoCapture}>Премьера в мире</div>
                        <div className={s.value}>{serial.premiereDate}</div>
                        <div className={s.infoCapture}>
                            Оригинальное название
                        </div>
                        <div className={s.value}>{serial.origName}</div>
                    </div>
                    <div className={s.wrapper}>
                        <div className={s.infoCapture}>Страна</div>
                        <div className={s.value}>{serial.country}</div>
                        <div className={s.infoCapture}>Жанры</div>
                        <div className={s.value}>{serial.genre.join(', ')}</div>
                    </div>
                    <div className={s.wrapper}>
                        <div className={s.infoCapture}>Язык аудиодорожки</div>
                        <div className={s.value}>
                            {serial.audioLanguage.join(', ')}
                        </div>
                        <div className={s.infoCapture}>Качество</div>
                        <div className={s.value}>{serial.quality}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
