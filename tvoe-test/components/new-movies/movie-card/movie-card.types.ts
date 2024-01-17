import { StaticImageData } from 'next/image'

export type MovieCardType = {
    img: StaticImageData
    rating?: string
    name?: string
}
