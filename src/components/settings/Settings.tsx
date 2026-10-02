import React from 'react';
import {SettingsDisplay} from "../settingsDisplay/SettingsDisplay";
import {ButtonsPanel} from "../buttonPanel/ButtonsPanel";
import {Button} from "../button/Button";
import s from './Settings.module.css'


type SettingsPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (newMaxValue: number) => void
    changeStartValue: (newStartValue: number) => void
    onSet: () => void
}

export const Settings = ({maxValue, onSet, changeStartValue, changeMaxValue, startValue}: SettingsPropsType) => {
    return (
        <div className={s.settings}>
            <SettingsDisplay maxValue={maxValue}
                             startValue={startValue}
                             changeStartValue={changeStartValue}
                             changeMaxValue={changeMaxValue}/>
            <ButtonsPanel>
                <Button name="set" onClick={onSet} />
            </ButtonsPanel>
        </div>
    );
};
