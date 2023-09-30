import { NavLink } from "react-router-dom";
import "./Footer.css"

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__copyright">
                <p className="footer__data">© 2020</p>
                <ul className="footer__list-links">
                    <li className="footer__list-item"><NavLink to="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</NavLink></li>
                    <li className="footer__list-item"><NavLink to="https://github.com/" className="footer__link">Github</NavLink></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;