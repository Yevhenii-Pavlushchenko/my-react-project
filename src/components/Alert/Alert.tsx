// src/components/Alert.tsx

import clsx from "clsx";
import css from "./Alert.module.css";

interface AlertProps {
  type?: "success" | "error"| "default";
}

export default function Alert({ type="default" }: AlertProps) {
  return (
    <p className={clsx(css.alert, type && css[type])}>
      This is a {type} alert text
    </p>
  );
}
