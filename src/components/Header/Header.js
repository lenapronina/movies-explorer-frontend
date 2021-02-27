import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';

function Header(){
  return (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src={headerLogo} alt="Логотип сервиса"/>
        <Navigation />
      </div>
    </header>
  )
}

export default Header;


//  header_type_profile