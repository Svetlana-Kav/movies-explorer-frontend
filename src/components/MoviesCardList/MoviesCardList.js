import "./MoviesCardList.css"

function MoviesCardList({children}) {

    return(
        <section className = "movies-list">
            <div className = "movies-list__container">
                {children}
            </div>
        </section>

    )
}

export default MoviesCardList;