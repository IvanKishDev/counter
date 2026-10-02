import React from 'react';
import s from './SettingsDisplay.module.css'

type SettingsDisplayProps = {
    maxValue: number
    startValue: number
    changeMaxValue: (n: number) => void
    changeStartValue: (n: number) => void
}

export const SettingsDisplay = ({ maxValue, startValue, changeMaxValue, changeStartValue }: SettingsDisplayProps) => {
    return (
        <div className={s.settingsDisplay}>
            <div className={s.row}>
                <label className={s.label} htmlFor="max-input">max value:</label>
                <input className={s.input} id="max-input" type="number" value={maxValue} onChange={(e) => {
                    const raw = e.currentTarget.value
                    changeMaxValue(raw === '' ? 0 : +raw)
                }} />
            </div>
            <div className={s.row}>
                <label className={s.label} htmlFor="start-input">start value:</label>
                <input className={s.input} id="start-input" type="number" value={startValue} onChange={(e) => {
                    const raw = e.currentTarget.value
                    changeStartValue(raw === '' ? 0 : +raw)
                }} />
            </div>
        </div>
    )
}

