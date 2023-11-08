import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";
import { REG_EMAIL, REG_NAME } from "../../utils/constants";

function Profile({
  setLoggedIn,
  setSortMovies,
  setChecked,
  handleEditProfile,
  setButtonSave,
  buttonSave,
  setDisabledButtonSubmitProfile,
  disabledButtonSubmitProfile,
  disabledInput,
}) {

  const { value } = useContext(CurrentUserContext);
  const [currentUser] = value;

  const { values, error, isValid, setValues, handleChange, resetInput } =
    useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setDisabledButtonSubmitProfile(true);
    } else {
      setDisabledButtonSubmitProfile(false);
    }
  }, [currentUser, values]);

  function changeButton() {
    setButtonSave(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleEditProfile(values);
  }

  function handleLogout() {
    resetInput();
    localStorage.removeItem("jwt");
    localStorage.removeItem("sortMovies");
    localStorage.removeItem("checked");
    localStorage.removeItem("valueSearch");
    setChecked(false);
    setSortMovies(false);
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form name="editProfile" onSubmit={handleSubmit} className="profile__form">
          <label className="profile__element">
            Имя
            <input
              placeholder="Имя"
              name="name"
              onChange={handleChange}
              disabled={disabledInput || !buttonSave ? true : false}
              required
              pattern={REG_NAME}
              minLength={2}
              maxLength={30}
              className="profile__input"
              type="text"
              value={values.name || ""}
            ></input>
            <span className="profile__span-error">{error.name}</span>
          </label>
          <label className="profile__element">
            E-mail
            <input
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              disabled={disabledInput || !buttonSave ? true : false}
              required
              className="profile__input"
              pattern={REG_EMAIL}
              type="email"
              value={values.email || ""}
            ></input>
            <span className="profile__span-error">{error.email}</span>
          </label>
          {buttonSave && (
            <button
              disabled={!isValid || disabledButtonSubmitProfile ? true : false}
              type="submit"
              className="profile__button-save"
            >
              Сохранить
            </button>
          )}
        </form>
        {!buttonSave && (
          <div className="profile__button-container">
            <button
              type="button"
              onClick={changeButton}
              className="profile__edit-button"
            >
              Редактировать
            </button>
            <button
              onClick={handleLogout}
              type="button"
              className="profile__button-exit"
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Profile;
