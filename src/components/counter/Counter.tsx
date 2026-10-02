import React from 'react';
import {CounterDisplay} from "../counterDisplay/CounterDisplay";
import {ButtonsPanel} from "../buttonPanel/ButtonsPanel";
import { Button } from '../button/Button'
import s from './Counter.module.css'


type CounterProps = {
    value: number
    maxValue: number
    isValid: boolean
    startValue: number
    error: boolean
    incrementValue: () => void
    resetValue: () => void
}


export const Counter = ({value, maxValue, incrementValue, resetValue, error, startValue, isValid}: CounterProps) => {

    return (
        <div className={s.counter}>
            <CounterDisplay value={value}
                            maxValue={maxValue}
                            isValid={isValid}
                            error={error}
            />
            <ButtonsPanel>
                <Button name="inc" onClick={incrementValue} disabled={!isValid || value === maxValue}/>
                <Button name="reset" onClick={resetValue} disabled={!isValid || value === startValue}/>
            </ButtonsPanel>

        </div>
    );
};

