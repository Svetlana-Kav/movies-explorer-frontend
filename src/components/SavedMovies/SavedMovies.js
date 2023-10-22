import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect} from "react";

function SavedMovies({
  setChecked,
  checked,
  sortMovies,
  setSortMovies,
  filterMovies,
  savedMovies,
  setSavedMovies,
}) {

  useEffect(() => {
    if (sortMovies) {
      setSortMovies();
      setChecked(false)
    }
  }, []);


  function handleSubmitSearch(value,checked) {
    filterMovies(value,checked, savedMovies);
  }
  return (
    <main className="saved-movies">
      <SearchForm
        setChecked={setChecked}
        checked={checked}
        handleSubmitSearch={handleSubmitSearch}
      ></SearchForm>
      <MoviesCardList>
        {sortMovies
          ? sortMovies.map((item, index) => (
              <MoviesCard
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                key={index}
                id={item.movieId}
                item={item}
                link={item.trailerLink}
                src={item.image}
                name={item.nameRU}
                duration={item.duration}
              ></MoviesCard>
            ))
          : savedMovies.map((item) => (
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
    </main>
  );
}

export default SavedMovies;
