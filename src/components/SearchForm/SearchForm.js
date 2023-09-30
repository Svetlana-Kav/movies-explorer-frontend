import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css"

function SearchForm() {
    return(
        <section className="search">
            <form className="search__form">
                <input placeholder="Фильм" className="search__input"></input>
                <button className="search__button"></button>
            </form>
            <FilterCheckbox></FilterCheckbox>
            <div className="search__border-bottom-line"></div>
        </section>
    )
}

export default SearchForm;