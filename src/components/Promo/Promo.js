import './Promo.css';
import promoLogo from '../../images/promo-logo.svg'

function Promo(){
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__image" src={promoLogo} alt="Колючая проволока"/>
      </div>
    </section>
  )
}

export default Promo;