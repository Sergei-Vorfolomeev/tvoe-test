import { StaticImageData } from 'next/image'

export type MovieCardType = {
    id?: string
    img: StaticImageData
    rating?: string
    name?: string
}
