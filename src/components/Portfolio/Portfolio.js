import "./Portfolio.css";
import { NavLink } from "react-router-dom";
// import linkPointer from "../../images/link-pointer.svg"

function Portfolio() {
  const listLink = [
    {
      link: "https://github.com/Svetlana-Kav/how-to-learn",
      text: "Статичный сайт",
    },
    {
      link: "https://github.com/Svetlana-Kav/russian-travel",
      text: "Адаптивный сайт",
    },
    {
      link: "https://github.com/Svetlana-Kav/react-mesto-api-full-gha",
      text: "Одностраничное приложение",
    },
  ];
  return (
    <div className="portfolio">
      <h4 className="portfolio__subtitle">Портфолио</h4>
      <ul className="portfolio__list">
        {listLink.map((item, index) => (
          <li key={index} className="portfolio__item">
            <NavLink className="portfolio__link" to={item.link}>
              <p className="portfolio__text-item">{item.text}</p>
              
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
