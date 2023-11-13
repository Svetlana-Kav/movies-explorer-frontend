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
            Мне нравится web-разработка, т.к. люблю решать интересные задачи,
            видеть результат своей работы. Есть возможность применять и
            прокачивать свои сильные стороны. Мои личные качества: аналитический
            склад ума, ответственность, умение работать с&nbsp;большими объемами
            информации, стремление к&nbsp;профессиональному росту,
            коммуникабельность, внимание к&nbsp;деталям, усидчивость, терпение.
            В свободное время люблю путешествовать, заниматься йогой, читать
            книги.
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
