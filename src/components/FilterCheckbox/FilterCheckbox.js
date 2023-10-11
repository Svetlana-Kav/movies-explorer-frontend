import "./FilterCheckbox.css"

function FilterCheckbox() {
    return(
        <div className="filter-checkbox" > 
            <label>
               <input className="filter-checkbox__input" type="checkbox"></input>
               <span className="filter-checkbox__switch"></span>
            </label> 
            <p className="filter-checkbox__text">Короткометражки</p>
        </div>

    )
}

export default FilterCheckbox;