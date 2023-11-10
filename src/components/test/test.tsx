import { FC, SyntheticEvent } from "react";
import s from "./test.module.css";
import { Label } from "../label/label";
import { Button } from "../button/button";

interface IProps {
  A: string;
  B: string;
  C: string;
  nextTest: (E: SyntheticEvent) => void;
  setInputElement: (O: string) => void;
  inputElement: string;
}

export const Test: FC<IProps> = ({
  A,
  B,
  C,
  nextTest,
  setInputElement,
  inputElement,
}) => {
  return (
    <form className={s.form} action="#">
      <div className={s.div}>
        <input
          onChange={() => setInputElement("A")}
          className={s.input}
          type="radio"
          defaultValue={A}
          name="option"
          id={A}
        />
        <Label inputId={A} text={A} />
      </div>
      <div className={s.div}>
        <input
          onChange={() => setInputElement("B")}
          className={s.input}
          type="radio"
          defaultValue={B}
          name="option"
          id={B}
        />
        <Label inputId={B} text={B} />
      </div>
      <div className={s.div}>
        <input
          onChange={() => setInputElement("C")}
          className={s.input}
          type="radio"
          defaultValue={C}
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
