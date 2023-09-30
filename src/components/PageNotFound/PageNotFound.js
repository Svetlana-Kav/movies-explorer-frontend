import "./PageNotFound.css"
import { NavLink } from "react-router-dom"

function PageNotFound() {
    return(
        <section className="page-not-found">
            <div className="page-not-found__content">
                <h1 className="page-not-found__title">404</h1>
                <p className="page-not-found__message">Страница не найдена</p>
            </div>
            <NavLink className="page-not-found__link" to="#">Назад</NavLink>
        </section>
    )
}

export default PageNotFound;