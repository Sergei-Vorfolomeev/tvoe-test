import type { Metadata } from 'next'
import { Archivo, Roboto } from 'next/font/google'
import '../styles/index.scss'

const inter = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['cyrillic', 'latin'],
})

export const archivo = Archivo({
    weight: ['900'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
