import "./Register.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useForm } from "../../hooks/useForm";
import { REG_EMAIL, REG_NAME } from "../../utils/constants";
import { register, authorize } from "../../utils/MainApi";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Register() {
  const { values, error, isValid, handleChange, resetInput } = useForm();

  const { value2 } = useContext(CurrentUserContext);
  const [popupInfo, setPopupInfo] = value2;

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    register(values.name, values.email, values.password)
      .then(() => {
        setPopupInfo({
          ...popupInfo,
          ok: true,
          title: "Вы успешно зарегистрировались.",
        });
        resetInput();
        navigate("/signin");
      })
      .catch((res) => {
        setPopupInfo({ ...popupInfo, error: true, title: res.message });
      });
  }

  return (
    <main>
      <section className="register">
        <div className="register__container">
          <NavLink to="/" className="register__logo-link">
            <img src={logo} alt="зеленый круг логотип сайта" />
          </NavLink>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form onSubmit={handleSubmit} className="register__form-container">
            <label className="register__form-item">
              Имя
              <input
                name="name"
                value={values.name || ""}
                onChange={handleChange}
                placeholder="Имя"
                required
                minLength={2}
                maxLength={30}
                pattern={REG_NAME}
                type="text"
                className="register__form-input"
              ></input>
              <span className="register__form-span">{error.name}</span>
            </label>
            <label className="register__form-item">
              E-mail
              <input
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                placeholder="E-mail"
                required
                type="email"
                pattern={REG_EMAIL}
                className="register__form-input"
              ></input>
              <span className="register__form-span">{error.email}</span>
            </label>
            <label className="register__form-item">
              Пароль
              <input
                name="password"
                value={values.password || ""}
                minLength={2}
                maxLength={30}
                placeholder="Пароль"
                onChange={handleChange}
                required
                type="password"
                className="register__form-input"
              ></input>
              <span className="register__form-span">{error.password}</span>
            </label>
            <button
              type="submit"
              disabled={isValid ? false : true}
              className="register__form-button"
            >
              Зарегистрироваться
            </button>
          </form>
          <p className="register__text">
            Уже зарегистрированы?
            <Link to={"/signin"} className="register__link">
              Войти
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register;
