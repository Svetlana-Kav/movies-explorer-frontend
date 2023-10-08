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
          <h3 className="resume__title">Виталий</h3>
          <h4 className="resume__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="resume__description">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
            слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a
            target="_blank"
            rel = "noreferrer"
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
