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
            <SectionName class = "technologies__name-border-black" text="Технологии"></SectionName>
            <h3 className="technologies__title">7 технологий</h3>
            <p className="technologies__subtitle">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
            <ul className="technologies__list">
                {textArray.map((item, index)=> (<li key={index} className="technologies__item">{item.text}</li>))}
            </ul>
        </section>
    )
}

export default Techs;