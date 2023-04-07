import { useState } from "react";

const useInput = (validateValue, initialValue = "") => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const [inputIsLeft, setInputIsLeft] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueHasError = !valueIsValid && inputIsLeft;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputTouchedHandler = () => {
    setInputIsTouched(true);
  };

  const inputLeftHandler = () => {
    setInputIsLeft(true);
  };

  const reset = () => {
    setEnteredValue("");
    setInputIsTouched(false);
    setInputIsLeft(false);
  };

  return {
    enteredValue,
    inputIsTouched,
    inputIsLeft,
    valueIsValid,
    valueHasError,
    valueChangeHandler,
    inputTouchedHandler,
    inputLeftHandler,
    reset,
  };
};

export default useInput;
