import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe.js";
import "./Main.css";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      {/* <Header></Header> */}
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
      {/* <Footer></Footer> */}
    </>
  );
}

export default Main;
