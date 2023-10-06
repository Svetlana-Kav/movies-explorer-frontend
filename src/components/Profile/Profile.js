import { useState } from "react";
import "./Profile.css";

function Profile() {

  const [buttonSave, setButtonSave] = useState(false);
  const [buttonEdit, setButtonEdit] = useState(true);

function button() {
    setButtonEdit(false)
    setButtonSave(true)
}
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
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
        <div>
          <button onClick={button} className="profile__edit-button">Редактировать</button>
          <button className="profile__button-exit">Выйти из аккаунта</button>
        </div>
      )}
      {buttonSave && (
        <button className="profile__button-save">Сохранить</button>
      )}
    </section>
  );
}

export default Profile;
