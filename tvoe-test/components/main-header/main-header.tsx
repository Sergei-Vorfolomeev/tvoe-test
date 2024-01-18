import Image from 'next/image'
import movieCover from '../../assets/img/image-3.png'
import movieName from '../../assets/img/image-4.png'
import s from './main-header.module.scss'
import { Button, Typography } from '@/components'

type HeaderProps = {}

export const MainHeader = ({}: HeaderProps) => {
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
                <Image
                    src={movieName}
                    alt={'movieName'}
                    className={s.movieName}
                />
                <Typography
                    variant={'title2'}
                    as={'h1'}
                    className={s.description}
                >
                    Неувядающий авантюрист и пытливый археолог-исследователь
                    по‑прежнему в седле.
                </Typography>
                <div className={s.buttonsContainer}>
                    <Button variant={'primary'} className={s.btn}>
                        Смотреть
                    </Button>
                    <Button variant={'secondary'} className={s.btn}>
                        О фильме
                    </Button>
                </div>
            </div>
        </header>
    )
}
