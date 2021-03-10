import './Portfolio.css';
import linkArrow from '../../images/portfolio-arrow.svg';

function Portfolio() {
  return(
    <div className="portfolio aboutme__portfolio">
      <h3 className="portfolio__heading">Портфолио</h3>
      <ul className="portfolio__works">
        <li className="portfolio__works-item">
          <a className="portfolio__link" href="https://lenapronina.github.io/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт
            <img className="portfolio__link-arrow" alt="Стрелка ссылки" src={linkArrow} />
          </a>
        </li>
        <li className="portfolio__works-item">
          <a className="portfolio__link" href="https://lenapronina.github.io/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт
            <img className="portfolio__link-arrow" alt="Стрелка ссылки" src={linkArrow} />
          </a>
        </li>
        <li className="portfolio__works-item">
          <a className="portfolio__link" href="http://netumesta.students.nomoredomains.work/sign-in" target="_blank" rel="noreferrer">Одностраничное приложение
            <img className="portfolio__link-arrow" alt="Стрелка ссылки" src={linkArrow} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;