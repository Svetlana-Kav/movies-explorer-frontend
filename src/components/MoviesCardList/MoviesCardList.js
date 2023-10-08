import "./MoviesCardList.css"

function MoviesCardList({children}) {

    return(
        <section className = "movies-list">
            <ul className = "movies-list__container">
                {children}
            </ul>
        </section>

    )
}

export default MoviesCardList;