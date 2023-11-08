import "./FilterCheckbox.css";

function FilterCheckbox({
  setChecked,
  checked,
  handleClick,
  isDisabledChekbox,
}) {
  function handleChecked() {
    if (checked) {
      setChecked(false);
      handleClick(false);
    } else {
      setChecked(true);
      handleClick(true);
    }
  }
  return (
    <div className="filter-checkbox">
      <label>
        <input
          onChange={handleChecked}
          checked={checked}
          disabled={isDisabledChekbox}
          className="filter-checkbox__input"
          type="checkbox"
        ></input>
        <span className="filter-checkbox__switch"></span>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
