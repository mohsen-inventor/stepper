import React from 'react'
import css from './ImageRatio.module.scss'
import Image from 'next/image'

type Props = {
    data: {
        url: string,
        alt: string,
    }
}

const ImageRatio = ({ data }: Props) => {
    return (
        <div className={css.imageFixedRatio}>
            <Image src={data.url} alt={data.alt} layout="fill" objectFit="cover" />
        </div>
    )
}

export default ImageRatio