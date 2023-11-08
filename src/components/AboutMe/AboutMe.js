import SectionName from "../NameSection/SectionName";
import "./AboutMe.css";
import fotoProfile from "../../images/foto-profile.svg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="student" id="student">
      <SectionName text="Студент"></SectionName>
      <div className="resume">
        <div className="resume__data">
          <h3 className="resume__title">Светлана</h3>
          <h4 className="resume__subtitle">Web-разработчик, 26 лет</h4>
          <p className="resume__description">
            Не так давно, я поняла, что больше не хочу ходить на работу.
            Удаленная работа стала моей мечтой. Эта мечта оказалась вполне
            реальна и я решила сменить сферу деятельности. Я прошла обучение на
            курсе web-разработки. Теперь на шаг ближе. Следующий шаг - стать
            профессионалом в данной области. 
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className="resume__link"
            href="https://github.com/Svetlana-Kav"
          >
            Github
          </a>
        </div>
        <img
          className="resume__foto"
          alt="Фотография студента выполнившего данный проект"
          src={fotoProfile}
        />
      </div>
      <Portfolio></Portfolio>
    </section>
  );
}

export default AboutMe;
