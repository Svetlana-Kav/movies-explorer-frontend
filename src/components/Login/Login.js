import "./Login.css";
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { REG_EMAIL } from "../../utils/constants";
import { useForm } from "../../hooks/useForm";
import { authorize, getUserInfo } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Login({handleLogin}) {

  const { values, error, isValid, handleChange, resetInput } = useForm({});
  const navigate = useNavigate();

  const { value, value2 } = useContext(CurrentUserContext);
  const [currentUser, setCurrentUser] = value;
  const [popupInfo, setPopupInfo] = value2
  

  const handleSubmit = (e) => {
    e.preventDefault();
    authorize(values.password, values.email)
      .then((data) => {
        if (data.token) {
          resetInput();
          handleLogin();
          navigate("/movies", { replace: true });
        }
      })
      .then(()=>{
        getUserInfo()
        .then((res)=>{
          setCurrentUser(res)
        })
      })
      .catch((res) =>{
        setPopupInfo({...popupInfo, error: true, title: res.message});
      })
  };


  return (
    <main>
      <section className="login">
        <div className="login__container">
          <NavLink to="/" className="login__logo-link">
            <img src={logo} alt="зеленый круг логотип сайта" />
          </NavLink>
          <h1 className="login__title">Рады видеть!</h1>
          <form onSubmit={handleSubmit} className="login__form-container">
            <label className="login__form-item">
              E-mail
              <input
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                placeholder="E-mail"
                required
                type="email"
                pattern={REG_EMAIL}
                className="login__form-input"
              ></input>
              <span className="login__form-span">{error.email}</span>
            </label>
            <label className="login__form-item">
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
                className="login__form-input"
              ></input>
              <span className="login__form-span">{error.password}</span>
            </label>
            <button disabled={isValid ? false : true} type="submit" className="login__form-button">
              Войти
            </button>
          </form>
          <p className="login__text">
            Ещё не зарегистрированы?
            <Link to={"/signup"} className="login__link">
              Регистрация
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
