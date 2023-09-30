import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__logo-link">
          <img src={logo} alt="зеленый круг логотип сайта" />
        </NavLink>
        <nav className="header__menu-main">
          <NavLink to="/signup" className="header__button-registration">
            Регистрация
          </NavLink>
          <NavLink to="/signup" className="header__button-authorization">
            Войти
          </NavLink>
        </nav>
      </header>

      <header className="header">
        <NavLink to="/" className="header__logo-link">
          <img src={logo} alt="зеленый круг логотип сайта" />
        </NavLink>
        <nav className="header__menu-movies">
          <NavLink to="/movies" className="header__menu-buttons">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="header__menu-buttons">
            Сохраненные фильмы
          </NavLink>
        </nav>
        <NavLink to="/profile" className="header__button-account">
          Аккаунт
        </NavLink>
      </header>
    </>
  );
}

export default Header;
