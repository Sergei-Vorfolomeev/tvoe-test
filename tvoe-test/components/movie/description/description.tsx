import { Typography } from '@/components'
import s from './description.module.scss'
import { Warning } from '@/assets/icons/warning'
import React from 'react'

type DescriptionProps = {
  description: string
}

export const Description = ({ description }: DescriptionProps) => {
  return (
    <>
      <Typography variant={'title1'} as={'h1'} className={s.title}>
        Описание
      </Typography>
      <Typography variant={'body2'} className={s.description}>
        {description}
      </Typography>
      <div className={s.warning}>
        <Warning w={'50'} h={'50'} className={s.icon} />
        <p>
          Контент может содержать сцены курения и употребления спиртных
          напитков. Курение и чрезмерное употребление алкоголя вредит вашему
          здоровью.
        </p>
      </div>
    </>
  )
}
