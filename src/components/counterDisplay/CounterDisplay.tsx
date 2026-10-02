import React from 'react';
import s from './CounterDisplay.module.css'

type CounterDisplayProps = {
    value: number
    maxValue: number
    isValid: boolean
    error: boolean       // ← есть ли ошибка?
}

export const CounterDisplay = ({value, maxValue, isValid, error}: CounterDisplayProps) => {
    if (error) {
        return <div className={`${s.display} ${s.error}`}>incorrect value</div>
    }

    if (!isValid) {
        return <div className={s.display}>enter values and press 'set'</div>
    }

    return <div className={`${s.display} ${value === maxValue ? s.max : ''}`}>{value}</div>
}

