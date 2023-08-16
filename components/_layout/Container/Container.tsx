import React from 'react'
import css from './Container.module.scss'

type Props = {
    ui?: {
        bgColor?: 'orange' | 'fuchsia' | 'pink' | 'blue' | 'purple' | 'turquoise',
    },
    children: React.ReactNode
}

const Container = ({ ui, children }: Props) => {
    return (
        <div className={`${css.outerContainer} ${ui?.bgColor && css[ui.bgColor]}`}>
            <div className={css.innerContainer}>
                {children}
            </div>
        </div>
    )
}

export default Container