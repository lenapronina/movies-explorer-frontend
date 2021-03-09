import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
      <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__media-info">
        <p className="footer__copyright">&copy;2020</p>
        <ul className="footer__links">
          <li className="footer__link-item">
            <a className="footer__link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" href="https://github.com/lenapronina" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="footer__link-item">
            <a className="footer__link" href="https://www.facebook.com/lenaemaya" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;