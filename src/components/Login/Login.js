import "./Login.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <NavLink to="/" className="login__logo-link">
          <img src={logo} alt="зеленый круг логотип сайта" />
        </NavLink>
        <h2 className="login__title">Добро пожаловать!</h2>
        <form className="login__form-container">
          <label className="login__form-item">E-mail
            <input className="login__form-input"></input>
            <span className="login__form-span"></span>
          </label>
          <label className="login__form-item">Пароль
            <input className="login__form-input"></input>
            <span className="login__form-span"></span>
          </label>
          <button className="login__form-button">Зарегистрироваться</button>
        </form>
        <p className="login__text">
          Ещё не зарегистрированы?
          <Link to={"/signup"} className="login__link">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;