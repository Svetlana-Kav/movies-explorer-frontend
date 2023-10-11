import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movies1 from "../../images/cards/movies1.svg";
import movies2 from "../../images/cards/movies2.svg";
import movies3 from "../../images/cards/movies3.svg";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";


function Movies() {
  const movies = [
    { img: movies1, name: "33 слова о дизайне", duration: "1ч 17м" },
    {
      img: movies2,
      name: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
    },
    { img: movies3, name: "Баския: Взрыв реальности", duration: "1ч 17м" },
    { img: movies1, name: "33 слова о дизайне", duration: "1ч 17м" },
    {
      img: movies2,
      name: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
    },
    { img: movies3, name: "Баския: Взрыв реальности", duration: "1ч 17м" },
    { img: movies1, name: "33 слова о дизайне", duration: "1ч 17м" },
    {
      img: movies2,
      name: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
    },
    { img: movies3, name: "Баския: Взрыв реальности", duration: "1ч 17м" },
    { img: movies1, name: "33 слова о дизайне", duration: "1ч 17м" },
    {
      img: movies2,
      name: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
    },
    { img: movies3, name: "Баския: Взрыв реальности", duration: "1ч 17м" },
  ];


  return (
    <main className="movies">
      {/* <Preloader></Preloader> */}
      <SearchForm></SearchForm>
      <MoviesCardList>
        {movies.map((item, index) => (
          <MoviesCard
            key={index}
            src={item.img}
            name={item.name}
            duration={item.duration}
          ></MoviesCard>
        ))}
      </MoviesCardList>
      <div className="movies__button-container">
        <button type="button" className="movies__button">Ещё</button>
      </div>
    </main>
  );
}

export default Movies;
