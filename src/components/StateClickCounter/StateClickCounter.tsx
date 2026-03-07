import { useState } from "react";
import css from './StateClickCounter.module.css'

interface Values {
  x: number;
  y: number;
}

export default function StateClickCounter() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div className={css.wrapperClickState}>
      <p>x: {values.x}, y: {values.y}</p>
          <div className={css["btn-wrapper"]}>
            <button className={css.btnClick} onClick={updateX}>Update x</button>
            <button className={css.btnClick} onClick={updateY}>Update y</button>
        </div>
    </div>
  );
}