import { useState } from "react";
import "./MoviesCard.css";
import { Link } from "react-router-dom";

function MoviesCard({ src, name, duration }) {

  const [saveButton, setSaveButton] = useState(false);

  function stateButton() {
    saveButton ? setSaveButton(false) : setSaveButton(true);
  }

  return (
    <article className="movie">
      <Link className="movie__link-container" to="#">
        <img className="movie__img" alt="кадр из фильма" src={src}></img>
        <button
          onClick={stateButton}
          className={
            saveButton
              ? "movie__button-save movie__button-save_active"
              : "movie__button-save movie__button-save_disactive"
          }
        ></button>
        <div className="movie__info">
          <p className="movie__name">{name}</p>
          <p className="movie__duration">{duration}</p>
        </div>
      </Link>
    </article>
  );
}

export default MoviesCard;
