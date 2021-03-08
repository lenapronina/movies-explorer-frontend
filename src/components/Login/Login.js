import React from 'react';
import './Login.css';
import SignHeader from '../SignHeader/SignHeader';
import Button from '../Button/Button';

function Login(params) {
  return (
    <div className="sign-container">
      <SignHeader 
        headerText="Рады видеть!"
      />
      <form className="sign-form">
        <label for="user-mail" className="sign-label">E-mail
          <input id="user-mail" className="sign-input" type="email"></input>
        </label>
        <label for="user-password" className="sign-label sign-label__error">Пароль
          <input id="user-password" className="sign-input sign-input__error" type="password"></input>
        </label>
        <span className="sign__error">Что-то пошло не так...</span>
      </form>
      <div className="sign-confirm sign-form__sign-confirm">
        <Button 
          clss="button_type_signup-sign"
          type="submit" 
          text="Войти"
        />
        <span className="sign__paragraph">Ещё не зарегистрированы?
          <Button
            clss="button_type_movies"
            text="Регистрация"
          />
        </span>
      </div>
    </div>
  )
}

export default Login;