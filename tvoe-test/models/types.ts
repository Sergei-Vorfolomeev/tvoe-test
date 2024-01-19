import { StaticImageData } from 'next/image'

export type MovieType = {
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

export type MovieCardType = {
  id?: string
  img: StaticImageData
  rating?: string
  name?: string
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
