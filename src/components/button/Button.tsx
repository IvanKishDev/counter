import s from './Button.module.css'

type Props = {
    name: string
    disabled?: boolean
    onClick: () => void
}

export const Button = ({ name, onClick, disabled}: Props) => {
    return <button className={s.button} onClick={onClick} disabled={disabled}>{name} </button>
}
