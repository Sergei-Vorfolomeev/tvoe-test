import Image from 'next/image'
import { Button, Typography } from '@/components'

export default function Home() {
    return (
        <div>
            <Button variant={'primary'}>
                <Typography variant={'title'} as={'h1'}>
                    Новинки
                </Typography>
            </Button>
        </div>
    )
}
