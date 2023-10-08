import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-container">
          <input placeholder="Фильм" className="search__input"></input>
          <button type="button" className="search__button"></button>
        </div>
        <FilterCheckbox></FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
