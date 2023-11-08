import { useEffect, useState } from "react";
import "./MoviesCard.css";
import { converterTime } from "../../utils/utils";
import { addSavedMovies, deleteSavedMovies } from "../../utils/MainApi";
import { useLocation } from "react-router-dom";

function MoviesCard({
  src,
  name,
  duration,
  link,
  id,
  item,
  savedMovies,
  setSavedMovies,
  setSortSavedMovies,
  sortSavedMovies,
}) {
  const [saveButton, setSaveButton] = useState(false);
  const [idSavedMovie, setIdSavedMovie] = useState("");

  const location = useLocation();

  useEffect(() => {
    const a = savedMovies.some((item) => {
      if (item.movieId === id) {
        setIdSavedMovie(item._id);
        return true;
      } else {
        return false;
      }
    });
    setSaveButton(a);
  }, [savedMovies]);

  function handleSaveDeleteMovies() {
    if (saveButton) {
      deleteSavedMovies(idSavedMovie)
        .then(() => {
          setSaveButton(false);
          const saved = savedMovies.filter((item) => item.movieId !== id);
          setSavedMovies(saved);
          if (location.pathname === "/saved-movies") {
            const savedSort = sortSavedMovies.filter(
              (item) => item.movieId !== id
            );
            setSortSavedMovies(savedSort);
          }
        })
        .catch((err) => console.log(err));
    } else {
      addSavedMovies(item)
        .then((res) => {
          setIdSavedMovie(res._id);
          setSaveButton(true);
          setSavedMovies([...savedMovies, res]);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <li>
      <article className="movie">
        <a
          target="_blank"
          rel="noreferrer"
          className="movie__link-container"
          href={link}
        >
          <img className="movie__img" alt={name} src={src}></img>
          <div className="movie__info">
            <h2 className="movie__name">{name}</h2>
            <p className="movie__duration">{converterTime(duration)}</p>
          </div>
        </a>
        <button
          type="button"
          onClick={handleSaveDeleteMovies}
          className={
            !saveButton
              ? "movie__button-save movie__button-save_disactive"
              : location.pathname === "/saved-movies"
              ? "movie__button-save_delete"
              : "movie__button-save movie__button-save_active"
          }
        ></button>
      </article>
    </li>
  );
}

export default MoviesCard;
