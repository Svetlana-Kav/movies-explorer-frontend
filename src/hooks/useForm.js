import { useState } from "react";

export function useForm(inputValues = {}) {

  const [values, setValues] = useState(inputValues);
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { value, name, validationMessage } = event.target;

    setError({ ...error, [name]: validationMessage });
    setValues({ ...values, [name]: value });

    setIsValid(event.target.closest("form").checkValidity());

  };

  function resetInput() {
    setValues({});
    setError({});
    setIsValid(false);
  }

  return { values, error, isValid, setValues, handleChange, resetInput };
}

