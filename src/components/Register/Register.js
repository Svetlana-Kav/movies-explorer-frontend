import "./Register.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <NavLink to="/" className="register__logo-link">
          <img src={logo} alt="зеленый круг логотип сайта" />
        </NavLink>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form-container">
          <label className="register__form-item">Имя
            <input required type="text" className="register__form-input"></input>
            <span className="register__form-span"></span>
          </label>
          <label className="register__form-item">E-mail
            <input required type="email" className="register__form-input"></input>
            <span className="register__form-span"></span>
          </label>
          <label className="register__form-item">Пароль
            <input required type="password" className="register__form-input"></input>
            <span className="register__form-span"></span>
          </label>
          <button type="submit" className="register__form-button">Зарегистрироваться</button>
        </form>
        <p className="register__text">
          Уже зарегистрированы?
          <Link to={"/signin"} className="register__link">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
