import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useForm } from "../../hooks/useForm.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({
  handleSubmitSearch,
  checked,
  setChecked,
  isDisabledChekbox,
  setIsDisabledChekbox,
}) {
  const { values, setValues, handleChange } = useForm({});
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("valueSearch")
    ) {
      const valueLocalStorage = JSON.parse(localStorage.getItem("valueSearch"));
      setValues(valueLocalStorage);
    }
  }, []);

  useEffect(()=>{
    if (!values.searchMovies && location.pathname === "/movies"){
      setIsDisabledChekbox(true)
    }else if(values && location.pathname === "/movies"){
      setIsDisabledChekbox(false)
    }
  })

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitSearch(values, checked);
  }

  function handleClick(checked) {
    if (values.searchMovies) {
      handleSubmitSearch(values, checked);
    } else {
      handleSubmitSearch({ searchMovies: "" }, checked);
    }
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <div className="search__form-container">
          <input
            value={values.searchMovies || ""}
            name="searchMovies"
            onChange={handleChange}
            required
            placeholder="Фильм"
            className="search__input"
          ></input>
          <button type="submit" className="search__button"></button>
        </div>

        <FilterCheckbox
          isDisabledChekbox={isDisabledChekbox}
          handleClick={handleClick}
          checked={checked}
          setChecked={setChecked}
        ></FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
