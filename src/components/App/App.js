import "./App.css";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import PageNotFound from "../PageNotFound/PageNotFound.js";
import Movies from "../Movies/Movies";
import { useEffect, useState } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  const location = useLocation();
  const [isActiveHeader, setIsActiveHeader] = useState(false);

  useEffect(() =>{
    if (location.pathname === "/" || 
    location.pathname === "/movies"||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile") {
      setIsActiveHeader(true)
    } else {
      setIsActiveHeader(false)
    }
  }, [location,isActiveHeader])

  return (
    <div className="page">
      {isActiveHeader && <Header></Header>}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path = "/saved-movies" element={<SavedMovies />} /> */}
        {/* <Route path = "/profile" element={<Profile />} /> */}
        <Route path = "/signup" element={<Register />} />
        <Route path = "/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
