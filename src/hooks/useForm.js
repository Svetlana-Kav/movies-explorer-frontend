import { useState } from "react";

//кастомный хук
export function useForm(inputValues = {}) {

  const [values, setValues] = useState(inputValues);
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { value, name, validationMessage } = event.target;

    setError({ ...error, [name]: validationMessage });
    setValues({ ...values, [name]: value });
    // console.log(error, values, isValid);

    setIsValid(event.target.closest("form").checkValidity());

  };

  function resetInput() {
    setValues({});
    setError({});
    setIsValid(false);
  }

  return { values, error, isValid, setValues, handleChange, resetInput };
}

