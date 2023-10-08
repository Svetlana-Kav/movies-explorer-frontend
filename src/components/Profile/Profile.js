import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [buttonSave, setButtonSave] = useState(false);
  const [buttonEdit, setButtonEdit] = useState(true);

  function button() {
    setButtonEdit(false);
    setButtonSave(true);
  }
  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label className="profile__element">
            Имя
            <input
              name="name"
              disabled
              required
              className="profile__input"
              defaultValue="Виталий"
              type="text"
            ></input>
            <span className="profile__span-error"></span>
          </label>
          <label className="profile__element">
            E-mail
            <input
              name="email"
              disabled
              required
              className="profile__input"
              defaultValue="pochta@mail.ru"
              type="email"
            ></input>
            <span className="profile__span-error"></span>
          </label>
        </form>
        {buttonEdit && (
          <div className="profile__button-container">
            <button
              type="button"
              onClick={button}
              className="profile__edit-button"
            >
              Редактировать
            </button>
            <NavLink to="/" className="profile__button-exit">
              Выйти из аккаунта
            </NavLink>
          </div>
        )}
        {buttonSave && (
          <button type="button" className="profile__button-save">
            Сохранить
          </button>
        )}
      </section>
    </main>
  );
}

export default Profile;
