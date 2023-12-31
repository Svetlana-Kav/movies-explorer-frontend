import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const [burgerMenu, setBurgerMenu] = useState(false);

  function openBurgerMenu() {
    setBurgerMenu(true);
  }

  function closeBurgerMenu() {
    setBurgerMenu(false);
  }

  return loggedIn ? (
    <>
      <header className="header">
        <NavLink to="/" className="header__logo-link">
          <img src={logo} alt="зеленый круг логотип сайта" />
        </NavLink>
        <nav className="header__menu-movies">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `${
                isActive
                  ? "header__menu-buttons_active"
                  : "header__menu-buttons"
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `${
                isActive
                  ? "header__menu-buttons_active"
                  : "header__menu-buttons"
              }`
            }
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <NavLink to="/profile" className="header__button-account">
          Аккаунт
        </NavLink>
        <button
          type="button"
          onClick={openBurgerMenu}
          className="header__button-burger"
        ></button>
      </header>
      {burgerMenu && (
        <Navigation closeBurgerMenu={closeBurgerMenu}></Navigation>
      )}
    </>
  ) : (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img src={logo} alt="зеленый круг логотип сайта" />
      </NavLink>
      <nav className="header__menu-main">
        <NavLink to="/signup" className="header__button-registration">
          Регистрация
        </NavLink>
        <NavLink to="/signin" className="header__button-authorization">
          Войти
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
