import React, {useState} from 'react';
import {Counter} from "../counter/Counter";
import {Settings} from "../settings/Settings";
import s from './App.module.css'

function App() {
  const [value, setValue] = useState(0);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [maxValue, setMaxValue] = useState<number>(10)
  const [startValue, setStartValue] = useState<number>(0)
  const [errorState, setErrorState] = useState<boolean>(false);



  const incrementValue = () => {
    if (value < maxValue) {
      setValue(value + 1)
    }
  }

  const resetValue = () => {
    setValue(startValue)
  }


  const onSet = () => {
    if (startValue < 0 || maxValue === startValue) {
      setErrorState(true)
      setIsValid(false)
    } else {
      setErrorState(false)
      setIsValid(true)
      setValue(startValue)
    }
  }

  const changeMaxValue = (newMaxValue: number) => {
    setMaxValue(newMaxValue)
    setErrorState(false)   // сброс ошибки
  }

  const changeStartValue = (newStartValue: number) => {
    setStartValue(newStartValue)
    setErrorState(false)
  }


  return (
      <div className={s.App}>

        <Settings maxValue={maxValue}
                  startValue={startValue}
                  changeMaxValue={changeMaxValue}
                  changeStartValue={changeStartValue}
                  onSet={onSet}/>

        <Counter value={value}
                 maxValue={maxValue}
                 isValid={isValid}
                 startValue={startValue}
                 incrementValue={incrementValue}
                 resetValue={resetValue}
                 error={errorState}/>
      </div>
  );
}

export default App;
