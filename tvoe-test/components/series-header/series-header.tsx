import s from './series-header.module.scss'
import Image from 'next/image'
import movieCover from '@/assets/img/image-111.png'
import movieName from '@/assets/img/1.png'
import { Button, Typography } from '@/components'
import { Bookmark } from '@/assets/icons/bookmark'
import { Heart } from '@/assets/icons/heart'

type SeriesHeaderProps = {}

export const SeriesHeader = ({}: SeriesHeaderProps) => {
    return (
        <header className={s.container}>
            <div className={s.coverContainer}>
                <Image
                    src={movieCover}
                    alt={'movieCover'}
                    className={s.mainCover}
                />
            </div>
            <div className={s.captionContainer}>
                <div>
                    <Image
                        src={movieName}
                        alt={'movieName'}
                        className={s.movieName}
                    />
                    <div className={s.infoBar}>
                        <Button variant={'secondary'} className={s.rating}>
                            10
                        </Button>
                        <Button variant={'link'} className={s.link}>
                            2022-2023
                        </Button>
                        <Button variant={'link'} className={s.link}>
                            1 сезон
                        </Button>
                        <Button variant={'link'} className={s.link}>
                            США
                        </Button>
                        <Button variant={'link'} className={s.link}>
                            Ужасы
                        </Button>
                        <Button variant={'link'} className={s.link}>
                            0+
                        </Button>
                    </div>
                    <Typography
                        variant={'body3'}
                        as={'h5'}
                        className={s.description}
                    >
                        Уэнсдэй предстоит освоить экстрасенсорные cпособности,
                        чтобы остановить местного серийного убийцу и раскрыть
                        тайну родителей.
                    </Typography>
                </div>

                <div className={s.buttonsContainer}>
                    <Button variant={'primary'} className={s.btn}>
                        Смотреть
                    </Button>
                    <Button variant={'secondary'} className={s.btn}>
                        Трейлер
                    </Button>
                    <Button variant={'secondary'} className={s.btn}>
                        <Bookmark w={'32'} h={'28'} />
                    </Button>
                    <Button variant={'secondary'} className={s.btn}>
                        <Heart w={'32'} h={'28'} />
                    </Button>
                </div>
            </div>
        </header>
    )
}
