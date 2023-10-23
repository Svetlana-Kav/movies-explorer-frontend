import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from "react";

function SavedMovies({
  setChecked,
  checked,
  filterMovies,
  savedMovies,
  setSavedMovies,
  sortSavedMovies,
  setSortSavedMovies,
  setIsDisabledChekbox,
  isDisabledChekbox,
}) {
  const [showSavedMovies, setShowSavedMovies] = useState(false);

  useEffect(() => {
    setSortSavedMovies([]);
    setChecked(false);
    setShowSavedMovies(true);
  }, []);

  function handleSubmitSearch(value, checked) {
    filterMovies(value, checked, savedMovies);
    setShowSavedMovies(false);
  }
  return (
    <main className="saved-movies">
      <SearchForm
        setIsDisabledChekbox={setIsDisabledChekbox}
        setChecked={setChecked}
        checked={checked}
        handleSubmitSearch={handleSubmitSearch}
        isDisabledChekbox={isDisabledChekbox}
      ></SearchForm>
      {showSavedMovies ? (
        <MoviesCardList>
          {savedMovies.map((item) => (
            <MoviesCard
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              key={item._id}
              id={item.movieId}
              item={item}
              link={item.trailerLink}
              src={item.image}
              name={item.nameRU}
              duration={item.duration}
            ></MoviesCard>
          ))}
        </MoviesCardList>
      ) : sortSavedMovies.length !== 0 ? (
        <MoviesCardList>
          {sortSavedMovies.map((item, index) => (
            <MoviesCard
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              key={item._id}
              id={item.movieId}
              item={item}
              link={item.trailerLink}
              src={item.image}
              name={item.nameRU}
              duration={item.duration}
              sortSavedMovies={sortSavedMovies}
              setSortSavedMovies={setSortSavedMovies}
            ></MoviesCard>
          ))}
        </MoviesCardList>
      ) : (
        <div className="info-container">
          <p className="info-container__text">
            "Ничего не найдено. Попробуйте еще раз."
          </p>
        </div>
      )}
    </main>
  );
}

export default SavedMovies;
