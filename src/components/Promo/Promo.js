import './Promo.css'
import NavTab from '../NavTab/NavTab'
function Promo(){
    const listLink = [
        {link: "/#project", text: "О проекте"},
        {link: "/#technologies", text: "Технологии"},
        {link: "/#student", text: "Студент"}
    ]
    return(
        <section className="promo">
            <div className="banner">
                <h1 className="banner__title">Учебный проект студента факультета Веб-разработки.</h1>
                <NavTab>
                    <ul className="navigation__list">
                    {listLink.map((item, index)=> (<li key={index} className='banner__element'><a href={item.link} className="banner__link">{item.text}</a></li>))}
                    </ul>
                </NavTab>
            </div>
        </section>
    )
};

export default Promo;