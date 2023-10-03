import "./MoviesCardList.css"

function MoviesCardList() {
    return(
        <section className = "movies-list">
            <div className = "movies-list__container"></div>
            <div className = "movies-list__button-container">
                <button className = "movies-list__button">Ещё</button>
            </div>
        </section>

    )
}

export default MoviesCardList;