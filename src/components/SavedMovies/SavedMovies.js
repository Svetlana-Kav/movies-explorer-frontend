import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import movies1 from "../../images/cards/movies1.svg";
import movies2 from "../../images/cards/movies2.svg";
import movies3 from "../../images/cards/movies3.svg";

function SavedMovies() {
  const moviess = [
    { img: movies1, name: "33 слова о дизайне", duration: "1ч 17м" },
    { img: movies2, name: "33 слова о дизайне", duration: "1ч 17м" },
    { img: movies3, name: "33 слова о дизайне", duration: "1ч 17м" },
  ];

  return (
    <main className="saved-movies">
      <SearchForm></SearchForm>
      <MoviesCardList>
        {moviess.map((item, index) => (
          <MoviesCard
            key={index}
            src={item.img}
            name={item.name}
            duration={item.duration}
          ></MoviesCard>
        ))}
      </MoviesCardList>
    </main>
  );
}

export default SavedMovies;
