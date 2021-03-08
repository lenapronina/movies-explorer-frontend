import React from 'react';
import './Register.css';
import SignHeader from '../SignHeader/SignHeader';
import Button from '../Button/Button';

function Register(){
  return(
    <div className="sign-container">
      <SignHeader 
        headerText="Добро пожаловать!"
      />
      <form className="sign-form">
        <label for="user-name" className="sign-label">Имя
          <input id="user-name" className="sign-input" type="text"></input>
        </label>
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
          text="Зарегестрироваться"
        />
        <span className="sign__paragraph">Уже зарегистрированы?
          <Button
            clss="button_type_movies"
            text="Войти"
          />
        </span>
      </div>
    </div>
  )
}

export default Register