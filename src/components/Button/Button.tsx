
import clsx from "clsx";
import css from "./Button.module.css";
import {useState} from "react"

interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
}

export default function Button({ variant, text }: ButtonProps) {

  const [clicks, setClicks]= useState(0)
  
  const handleClick = () => {
      setClicks(clicks + 1)
    console.log(clicks);
  };
  
  return (
    <button
    className={clsx(css.button, variant && css[variant])}
      onClick={handleClick}>
      {text}
    </button>
  );
}
