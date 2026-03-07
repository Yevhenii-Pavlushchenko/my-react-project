import css from './ClickCounter.module.css'
import clsx from "clsx";

interface ClickCounterProps{
    variant?: "primary" | "secondary";
    value: number,
    onUpdate: ()=> void,
}

export default function ClickCounter({ variant="primary", value, onUpdate}:ClickCounterProps) {
    return(
        <button
            className={clsx(css.button,css[variant])}
            onClick={onUpdate}>
        Cliked {value}
        </button>
    )
}