'use client'
import React from 'react'
import css from './Title.module.scss'

type Props = {
    ui?: {
        size?: 'small' | 'default',
        bold?: boolean,
        animation?: boolean,
    }
    data?: {
        title: string,
        description?: string,
    }
}

const Title = ({ ui, data }: Props) => {
    const isAnimation = ui?.animation === null || ui?.animation === false ? false : true;
    const isSmall = ui?.size === 'small' && css.small;
    const isBold = ui?.bold && css.bold;

    return (
        <div className={`${css.title} ${isSmall} ${isBold}`}>
            <h1 data-lag={isAnimation && '0.2'}>{data?.title}</h1>
            <p data-lag={isAnimation && '0.4'}>{data?.description}</p>
        </div>
    )
}

export default Title