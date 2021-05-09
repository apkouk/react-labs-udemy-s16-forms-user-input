import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouch: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouch: state.isTouch };
  }

  if (action.type === "BLUR") {
    return { isTouch: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { isTouch: false, value: '' };
  }

  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouch;

  const valueChangedHandler = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const valueInputBlurHandler = (event) => {
    dispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangedHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
