import React, { ReactNode } from 'react'
import s from './ButtonsPanel.module.css'

type ButtonsPanelProps = {
    children: ReactNode
}

export const ButtonsPanel = ({ children }: ButtonsPanelProps) => {
    return (
        <div className={s.buttons}>
            {children}
        </div>
    )
}