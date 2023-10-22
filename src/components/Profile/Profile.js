import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";
import { REG_EMAIL, REG_NAME } from "../../utils/constants";
import { editProfile } from "../../utils/MainApi";

function Profile({setLoggedIn, setSortMovies, setChecked}) {
  const [buttonSave, setButtonSave] = useState(false);
  const [disabledButtonSave, setDisabledButtonSave] = useState(false);

  const { value, value2 } = useContext(CurrentUserContext);
  const [currentUser, setCurrentUser] = value;
  const [popupInfo, setPopupInfo] = value2

  const { values, error, isValid, setValues, handleChange,resetInput } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setDisabledButtonSave(true);
    } else {
      setDisabledButtonSave(false);
    }
  }, [currentUser, values]);

  function changeButton() {
    setButtonSave(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    editProfile(values)
    .then((res) => {
      setCurrentUser(res);
      setButtonSave(false);
      setPopupInfo({ ...popupInfo, ok: true, title: "Успешно" });
    })
    .catch((res)=>{
      setPopupInfo({ ...popupInfo, error: true, title: res.message });
    });
  }

  function handleLogout() {
    resetInput()
    localStorage.removeItem("jwt");
    localStorage.removeItem("sortMovies");
    localStorage.removeItem("checked");
    localStorage.removeItem("valueSearch");
    setChecked(false)
    setSortMovies(false);
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form onSubmit={handleSubmit} className="profile__form">
          <label className="profile__element">
            Имя
            <input
              placeholder="Имя"
              name="name"
              onChange={handleChange}
              disabled={buttonSave ? false : true}
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
              disabled={buttonSave ? false : true}
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
              disabled={!isValid || disabledButtonSave ? true : false}
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
