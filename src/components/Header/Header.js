import './Header.css';
import headerLogo from '../../images/header-logo.svg';
import NavTab from '../NavTab/NavTab';

function Header(){
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип сервиса"/>
      <NavTab />
    </header>
  )
}

export default Header;