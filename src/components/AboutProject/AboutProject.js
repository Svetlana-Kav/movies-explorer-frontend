import SectionName from "../NameSection/SectionName";
import './AboutProject.css'

function AboutProject() {
    return(
        <section className="project" id="project">
            <SectionName text = "О проекте"></SectionName>
            <div className="project__info">
                <div className="project__element">
                    <h4 className="project__subtitle">Дипломный проект включал 5 этапов</h4>
                    <p className="project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
                </div>
                <div className="project__element">
                    <h4 className="project__subtitle">На выполнение диплома ушло 5 недель</h4>
                    <p className="project__description">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__stages">
                    <p className="project__first-stage_scale">1 неделя</p>
                    <p className="project__second-stage_scale">4 недели</p>
                    <p className="project__stage_text">Back-end</p>
                    <p className="project__stage_text">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;