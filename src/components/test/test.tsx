import { FC, useState } from "react";
import s from "./test.module.css";
import { Label } from "../label/label";
import { Button } from "../button/button";

interface IProps {
  A: string;
  B: string;
  C: string;
  nextTest: () => void;
}

export const Test: FC<IProps> = ({ A, B, C, nextTest }) => {
  const [inputElement, setInputElement] = useState("");

  return (
    <form className={s.form} action="#">
      <div className={s.div}>
        <input
          onChange={(e) => setInputElement(e.target.value)}
          className={s.input}
          type="radio"
          value={A}
          name="option"
          id={A}
        />
        <Label inputId={A} text={A} />
      </div>
      <div className={s.div}>
        <input
          onChange={(e) => setInputElement(e.target.value)}
          className={s.input}
          type="radio"
          value={B}
          name="option"
          id={B}
        />
        <Label inputId={B} text={B} />
      </div>
      <div className={s.div}>
        <input
          onChange={(e) => setInputElement(e.target.value)}
          className={s.input}
          type="radio"
          value={C}
          name="option"
          id={C}
        />
        <Label inputId={C} text={C} />
      </div>
      <Button
        classname={!inputElement ? s.button_disabled : ""}
        disabled={!inputElement ? true : false}
        onClick={nextTest}
        text={"Следующий вопрос"}
      />
    </form>
  );
};
