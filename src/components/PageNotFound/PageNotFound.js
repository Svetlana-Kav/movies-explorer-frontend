import "./PageNotFound.css"
import { useNavigate } from "react-router-dom"

function PageNotFound() {

    const navigate = useNavigate();

    return(
        <main>
        <section className="page-not-found">
            <div className="page-not-found__content">
                <h1 className="page-not-found__title">404</h1>
                <p className="page-not-found__message">Страница не найдена</p>
            </div>
            <button onClick={() => navigate(-1)} className="page-not-found__button" >Назад</button>
        </section>
        </main>
    )
}

export default PageNotFound;