import './Button.css';
import accountIcon from '../../images/navigation-account-icon.svg';

function Button({clss, text}) {

// <button className="account-button">Аккаунт
//         <img alt="Иконка" src={accountIcon}/>
//       </button> 

  const checkBtn = ( clss === 'button_type_account' ) ? ( <img className="button__image" alt="Иконка" src={accountIcon}/> ) : null
  return(
    <button className={`button ${clss}`}>
      {text} {(checkBtn)}
    </button>
  )
}

export default Button;