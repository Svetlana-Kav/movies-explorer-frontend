import SectionName from "../NameSection/SectionName";
import "./Techs.css"

function Techs(){
    const textArray = [
        {text:"HTML"},
        {text:"CSS"},
        {text:"JS"},
        {text:"React"},
        {text:"Git"},
        {text:"Express.js"},
        {text:"mongoDB"}
    ]
    return(
        <section className="technologies" id="technologies">
            <SectionName class = "section__name_border-black" text="Технологии"></SectionName>
            <h2 className="technologies__title">7 технологий</h2>
            <h5 className="technologies__subtitle">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</h5>
            <ul className="technologies__list">
                {textArray.map((item, index)=> (<li key={index} className="technologies__item">{item.text}</li>))}
            </ul>
        </section>
    )
}

export default Techs;