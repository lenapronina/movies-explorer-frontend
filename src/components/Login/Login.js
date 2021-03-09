import React from 'react';
import './Login.css';
import SignHeader from '../SignHeader/SignHeader';
import Button from '../Button/Button';

function Login({goLanding, signUp}) {
  return (
    <div className="sign-container">
      <SignHeader
        handleLogo={goLanding} 
        headerText="Рады видеть!"
      />
      <form className="sign-form sign-header__sign-form">
        <label htmlFor="user-mail" className="sign-label">E-mail
          <input id="user-mail" className="sign-input" type="email" placeholder="pochta@yandex.ru" autoComplete="on" required></input>
        </label>
        <label htmlFor="user-password" className="sign-label sign-label__error">Пароль
          <input id="user-password" className="sign-input sign-input__error" type="password" autoComplete="on" required></input>
        </label>
        <span className="sign__error">Что-то пошло не так...</span>
      </form>
      <div className="sign-confirm sign-form__sign-login">
        <Button 
          mode="button_type_sign"
          type="submit" 
          text="Войти"
        />
        <span className="sign__paragraph">Ещё не зарегистрированы?&nbsp;
          <Button
            mode="button_type_sign-simple"
            text="Регистрация"
            handleClick={signUp}
          />
        </span>
      </div>
    </div>
  )
}

export default Login;