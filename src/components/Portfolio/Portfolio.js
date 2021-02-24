import './Portfolio.css';
import linkArrow from '../../images/portfolio-arrow.svg';

function Portfolio() {
  return(
    <div className="portfolio aboutme__portfolio">
      <h3 className="portfolio__heading">Портфолио</h3>
      <ul className="portfolio__works">
        <li className="portfolio__works-item">
          <a className="portfolio__link" href="ya.ru">Статичный сайт
            <img className="portfolio__link-arrow" alt="alt" src={linkArrow} />
          </a>
        </li>
        <li className="portfolio__works-item">
          <a className="portfolio__link" href="ya.ru">Адаптивный сайт
            <img className="portfolio__link-arrow" alt="alt" src={linkArrow} />
          </a>
        </li>
        <li className="portfolio__works-item">
          <a className="portfolio__link" href="http://ya.ru">Одностраничное приложение
            <img className="portfolio__link-arrow" alt="alt" src={linkArrow} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Portfolio;