import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import {
  NUMBER_CARDS_DESKTOP,
  NUMBER_CARDS_TABLE_MOBILE,
} from "../../utils/constants";

function Movies({
  setChecked,
  checked,
  sortMovies,
  allMovies,
  filterMovies,
  savedMovies,
  setSavedMovies,
  setSortMovies,
  isDisabledChekbox,
  setIsDisabledChekbox,
  isPreloader,
  getAllMovies,
  isError,
}) {
  const [numberDisplayedMovies, setNumberDisplayedMovies] = useState(0);

  useEffect(() => {
    determiningNumberFilms();
  }, [sortMovies]);

  useEffect(() => {
    window.addEventListener("resize", determiningNumberFilms);
    return window.removeEventListener("resize", determiningNumberFilms);
  });

  function determiningNumberFilms() {
    if (window.innerWidth > 1100) {
      setNumberDisplayedMovies(12);
    } else if (window.innerWidth > 680) {
      setNumberDisplayedMovies(8);
    } else {
      setNumberDisplayedMovies(5);
    }
  }

  function handleClickButtonMore() {
    if (window.innerWidth > 1100) {
      setNumberDisplayedMovies(numberDisplayedMovies + NUMBER_CARDS_DESKTOP);
    } else if (window.innerWidth > 680) {
      setNumberDisplayedMovies(
        numberDisplayedMovies + NUMBER_CARDS_TABLE_MOBILE
      );
    } else {
      setNumberDisplayedMovies(
        numberDisplayedMovies + NUMBER_CARDS_TABLE_MOBILE
      );
    }
  }

  useEffect(() => {
    if (localStorage.getItem("sortMovies")) {
      let checked = JSON.parse(localStorage.getItem("checked"));
      let sortMovies = JSON.parse(localStorage.getItem("sortMovies"));
      setSortMovies(sortMovies);
      setChecked(checked);
    } else {
      setIsDisabledChekbox(true);
    }
  }, []);

  function handleSubmitSearch(value, checked) {
    if (!localStorage.getItem("sortMovies") || allMovies.length === 0) {
      getAllMovies(value, checked);
    } else {
      filterMovies(value, checked, allMovies);
    }
    localStorage.setItem("valueSearch", JSON.stringify(value));
    localStorage.setItem("checked", checked);
  }
  return (
    <main className="movies">
      <SearchForm
        setIsDisabledChekbox={setIsDisabledChekbox}
        isDisabledChekbox={isDisabledChekbox}
        sortMovies={sortMovies}
        setChecked={setChecked}
        checked={checked}
        handleSubmitSearch={handleSubmitSearch}
      ></SearchForm>
      {isPreloader ? (
        <Preloader></Preloader>
      ) : (
        sortMovies && (
          <MoviesCardList>
            {sortMovies.slice(0, numberDisplayedMovies).map((item) => (
              <MoviesCard
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                key={item.id}
                id={item.id}
                item={item}
                link={item.trailerLink}
                src={`https://api.nomoreparties.co${item.image.url}`}
                name={item.nameRU}
                duration={item.duration}
              ></MoviesCard>
            ))}
          </MoviesCardList>
        )
      )}
      <div className="info-container">
        <p className="info-container__text">
          {isError &&
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."}
          {sortMovies.length === 0 && "Ничего не найдено."}
        </p>
      </div>
      {sortMovies.length > numberDisplayedMovies && (
        <div className="movies__button-container">
          <button
            onClick={handleClickButtonMore}
            type="button"
            className="movies__button"
          >
            Ещё
          </button>
        </div>
      )}
    </main>
  );
}

export default Movies;
