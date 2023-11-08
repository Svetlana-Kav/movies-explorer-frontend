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
import {
  authorize,
  checkToken,
  editProfile,
  getSavedMovies,
  getUserInfo,
  register,
} from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { getMovies } from "../../utils/MoviesApi";

function App() {
  //отслеживание текущего url
  const location = useLocation();
  const path = location.pathname;

  //переменные для фильмов
  const [allMovies, setAllMovies] = useState([]);
  const [savMovies, setSavMovies] = useState([]);
  const [sortMovies, setSortMovies] = useState([]);
  const [sortSavedMovies, setSortSavedMovies] = useState([]);

  //состояние чекбокса
  const [checked, setChecked] = useState(false);
  const [isDisabledChekbox, setIsDisabledChekbox] = useState(false);

  //состояние инпутов и сабмита
  const [disabledButtonSubmitProfile, setDisabledButtonSubmitProfile] =
    useState(false);
  const [disabledButtonSubmitSearch, setDisabledButtonSubmitSearch] =
    useState(false);
  const [disabledButtonSubmitRegAuth, setDisabledButtonSubmitSearchRegAuth] =
    useState(false);

  const [disabledInput, setDisabledInput] = useState(false);

  //переменные для футера, хедера
  const [isActiveHeader, setIsActiveHeader] = useState(false);
  const [isActiveFooter, setIsActiveFooter] = useState(false);

  //данные о user
  const [currentUser, setCurrentUser] = useState({});
  const [buttonSave, setButtonSave] = useState(false);

  //данные для отрисовки попапа, прелоадера, ошибки
  const [popupInfo, setPopupInfo] = useState({});
  const [isPreloader, setIsPreloader] = useState(false);
  const [isError, setIsError] = useState(false);

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

  function handleRegistr(name, email, password) {
    setDisabledButtonSubmitSearchRegAuth(true);
    setDisabledInput(true);
    register(name, email, password)
      .then(() => {
        setPopupInfo({
          ...popupInfo,
          ok: true,
          title: "Вы успешно зарегистрировались.",
        });
        handleAuthorize(password, email);
      })
      .then(() => {
        navigate("/movies");
      })
      .catch((res) => {
        setPopupInfo({ ...popupInfo, error: true, title: res.message });
      })
      .finally(() => {
        setDisabledButtonSubmitSearchRegAuth(false);
        setDisabledInput(false);
      });
  }

  function handleAuthorize(password, email) {
    setDisabledButtonSubmitSearchRegAuth(true);
    setDisabledInput(true);
    authorize(password, email)
      .then((data) => {
        if (data.token) {
          handleLogin();
          navigate("/movies", { replace: true });
        }
      })
      .then(() => {
        getUserInfo().then((res) => {
          setCurrentUser(res);
        });
      })
      .catch((res) => {
        setPopupInfo({ ...popupInfo, error: true, title: res.message });
      })
      .finally(() => {
        setDisabledButtonSubmitSearchRegAuth(false);
        setDisabledInput(false);
      });
  }

  function handleEditProfile(values) {
    setDisabledInput(true);
    setDisabledButtonSubmitProfile(true);
    editProfile(values)
      .then((res) => {
        setCurrentUser(res);
        setButtonSave(false);
        setPopupInfo({ ...popupInfo, ok: true, title: "Успешно" });
      })
      .catch((res) => {
        setPopupInfo({ ...popupInfo, error: true, title: res.message });
      })
      .finally(() => {
        setDisabledInput(false);
      });
  }

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
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

  function filterMovies(value, checked, movies) {
    let filtered = movies.filter((item) => {
      let sort =
        item.nameRU.toLowerCase().includes(value.searchMovies.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(value.searchMovies.toLowerCase());
      return checked ? sort && item.duration <= 40 : sort;
    });
    if (location.pathname === "/movies") {
      localStorage.setItem("sortMovies", JSON.stringify(filtered));
      setSortMovies(filtered);
    } else if (location.pathname === "/saved-movies") {
      setSortSavedMovies(filtered);
    }
  }

  function getAllMovies(value, checked) {
    setIsPreloader(true);
    setDisabledButtonSubmitSearch(true);
    setDisabledInput(true);
    setIsDisabledChekbox(true);
    getMovies()
      .then((movies) => {
        setAllMovies(movies);
        setIsDisabledChekbox(false);
        filterMovies(value, checked, movies);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsPreloader(false);
        setDisabledButtonSubmitSearch(false);
        setDisabledInput(false);
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
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Register
                  handleRegistr={handleRegistr}
                  disabledButtonSubmitRegAuth={disabledButtonSubmitRegAuth}
                  disabledInput={disabledInput}
                />
              )
            }
          />
          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login
                  handleAuthorize={handleAuthorize}
                  disabledButtonSubmitRegAuth={disabledButtonSubmitRegAuth}
                  disabledInput={disabledInput}
                />
              )
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isError={isError}
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
                disabledInput={disabledInput}
                disabledButtonSubmitSearch={disabledButtonSubmitSearch}
                // setDisabledButtonSubmit={setDisabledButtonSubmit}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                setChecked={setChecked}
                checked={checked}
                setSortSavedMovies={setSortSavedMovies}
                sortSavedMovies={sortSavedMovies}
                savedMovies={savMovies}
                setSavedMovies={setSavMovies}
                loggedIn={loggedIn}
                sortMovies={sortMovies}
                filterMovies={filterMovies}
                setIsDisabledChekbox={setIsDisabledChekbox}
                isDisabledChekbox={isDisabledChekbox}
                disabledInput={disabledInput}
                disabledButtonSubmitSearch={disabledButtonSubmitSearch}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                handleEditProfile={handleEditProfile}
                buttonSave={buttonSave}
                setButtonSave={setButtonSave}
                setChecked={setChecked}
                setSortMovies={setSortMovies}
                setLoggedIn={setLoggedIn}
                disabledButtonSubmitProfile={disabledButtonSubmitProfile}
                setDisabledButtonSubmitProfile={setDisabledButtonSubmitProfile}
                disabledInput={disabledInput}
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
