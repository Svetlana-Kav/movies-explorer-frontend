import "./App.css";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Header from "../Header/Header";
import PageNotFound from "../PageNotFound/PageNotFound.js";
import Movies from "../Movies/Movies";
import { useEffect, useState } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import PopupInfo from "../PopupInfo/PopupInfo";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { checkToken, getSavedMovies } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { getMovies } from "../../utils/MoviesApi";

function App() {
  //отслеживание текущего url
  const location = useLocation();
  const path = location.pathname;

  //переменные для фильмов
  const [allMovies, setAllMovies] = useState([]);
  const [savMovies, setSavMovies] = useState([]);
  const [sortMovies, setSortMovies] = useState(false);

  //состояние чекбокса
  const [checked, setChecked] = useState(false);
  const [isDisabledChekbox, setIsDisabledChekbox] = useState(false);

  //переменные для футера, хедера
  const [isActiveHeader, setIsActiveHeader] = useState(false);
  const [isActiveFooter, setIsActiveFooter] = useState(false);

  //данные о user
  const [currentUser, setCurrentUser] = useState({});

  //данные для отрисовки попапа, прелоадера, ошибки
  const [popupInfo, setPopupInfo] = useState({});
  const [isPreloader, setIsPreloader] = useState(false);
  const [isError, setIsError] = useState(false)

  const navigate = useNavigate();

  //авторизован пользователь или нет
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  //переменные для попапа
  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies()
        .then((savedMovies) => {
          setSavMovies(savedMovies);
        })
        .catch((err) => {
          setSavMovies([]);
          console.log("нет фильмов");
        });
    }
  }, [loggedIn]);

  function closePopup() {
    setPopupInfo({ ...popupInfo, ok: false, error: false });
  }

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies"
    ) {
      setIsActiveHeader(true);
      setIsActiveFooter(true);
    } else if (location.pathname === "/profile") {
      setIsActiveHeader(true);
      setIsActiveFooter(false);
    } else {
      setIsActiveHeader(false);
      setIsActiveFooter(false);
    }
  }, [location, isActiveHeader]);

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          // console.log(currentUser);
        })
        .then((res) => {
          setLoggedIn(true);
        })
        .then((res) => {
          navigate(path, { replace: true });
        })
        .catch((err) => {
          console.log(`${err.status} ${err.text}`);
        });
    }
  };

  useEffect(() => {
    if (sortMovies && location.pathname === "/movies") {
      localStorage.setItem("sortMovies", JSON.stringify(sortMovies));
    }
  }, [sortMovies]);

  function filterMovies(value, checked, movies) {
    // console.log(value, checked, movies)
    let filtered = movies.filter((item) => {
      let sort =
        item.nameRU.toLowerCase().includes(value.searchMovies.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(value.searchMovies.toLowerCase());
      return checked ? sort && item.duration <= 40 : sort;
    });
    console.log(filtered.length, checked);
    setSortMovies(filtered);
  }

  function getAllMovies(value, checked) {
    setIsPreloader(true);
    getMovies()
      .then((movies) => {
        setAllMovies(movies);
        setIsDisabledChekbox(false);
        filterMovies(value, checked, movies);
        setIsError(false);
      })
      .catch(()=>{
        setIsError(true);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{
          value: [currentUser, setCurrentUser],
          value2: [popupInfo, setPopupInfo],
        }}
      >
        {isActiveHeader && <Header loggedIn={loggedIn}></Header>}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signup"
            element={
              loggedIn ? <Navigate to="/movies" replace /> : <Register />
            }
          />
          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isError = {isError}
                getAllMovies={getAllMovies}
                isPreloader={isPreloader}
                setAllMovies={setAllMovies}
                isDisabledChekbox={isDisabledChekbox}
                setIsDisabledChekbox={setIsDisabledChekbox}
                checked={checked}
                setChecked={setChecked}
                savedMovies={savMovies}
                setSavedMovies={setSavMovies}
                loggedIn={loggedIn}
                sortMovies={sortMovies}
                setSortMovies={setSortMovies}
                allMovies={allMovies}
                filterMovies={filterMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                setChecked={setChecked}
                checked={checked}
                element={SavedMovies}
                savedMovies={savMovies}
                setSavedMovies={setSavMovies}
                loggedIn={loggedIn}
                sortMovies={sortMovies}
                setSortMovies={setSortMovies}
                filterMovies={filterMovies}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                setChecked={setChecked}
                setSortMovies={setSortMovies}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {isActiveFooter && <Footer></Footer>}
        <PopupInfo closePopup={closePopup}></PopupInfo>
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
