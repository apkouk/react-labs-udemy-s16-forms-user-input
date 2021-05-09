import { useState } from "react";

const useInput = (validateValue) => {
    
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouch;

  const valueChangedHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setIsTouch(true);
  };

  const reset = () => {
      setEnteredValue('');
      setIsTouch(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangedHandler,
    valueInputBlurHandler,
    reset
  };
};

export default useInput;
