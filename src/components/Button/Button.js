import './Button.css';
import accountIcon from '../../images/navigation-account-icon.svg';

function Button({clss, text, handleClick}) {

  const checkBtn = ( clss === 'button_type_account' ) ? ( <img className="button__image" alt="Иконка" src={accountIcon}/> ) : null

  return(
    <button className={`button ${clss}`} onClick={handleClick}>
      {text} {(checkBtn)}
    </button>
  )
}

export default Button;