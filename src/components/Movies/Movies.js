import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </>
  );
}

export default Movies;
