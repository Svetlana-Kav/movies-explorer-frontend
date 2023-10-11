import "./Register.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <main>
      <section className="register">
        <div className="register__container">
          <NavLink to="/" className="register__logo-link">
            <img src={logo} alt="зеленый круг логотип сайта" />
          </NavLink>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form-container">
            <label className="register__form-item">
              Имя
              <input
                placeholder="Имя"
                required
                minLength={2}
                maxLength={30}
                type="text"
                className="register__form-input"
              ></input>
              <span className="register__form-span"></span>
            </label>
            <label className="register__form-item">
              E-mail
              <input
                placeholder="E-mail"
                required
                minLength={2}
                maxLength={30}
                type="email"
                className="register__form-input"
              ></input>
              <span className="register__form-span">
                Пользователь с таким email уже существует.
              </span>
            </label>
            <label className="register__form-item">
              Пароль
              <input
                minLength={2}
                maxLength={30}
                placeholder="Пароль"
                required
                type="password"
                className="register__form-input"
              ></input>
              <span className="register__form-span"></span>
            </label>
            <button type="submit" className="register__form-button">
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
