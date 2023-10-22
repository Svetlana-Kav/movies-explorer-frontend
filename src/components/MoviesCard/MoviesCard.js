import { useEffect, useState } from "react";
import "./MoviesCard.css";
import { converterTime } from "../../utils/utils";
import { addSavedMovies, deleteSavedMovies } from "../../utils/MainApi";

function MoviesCard({
  src,
  name,
  duration,
  link,
  id,
  item,
  savedMovies,
  setSavedMovies,
}) {
  const [saveButton, setSaveButton] = useState(false);
  const [idSavedMovie, setIdSavedMovie] = useState("");

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
        })
        .then(() => {
          console.log(savedMovies);
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
            saveButton
              ? "movie__button-save movie__button-save_active"
              : "movie__button-save movie__button-save_disactive"
          }
        ></button>
      </article>
    </li>
  );
}

export default MoviesCard;
