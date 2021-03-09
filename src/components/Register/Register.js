import React from 'react';
import './Register.css';
import SignHeader from '../SignHeader/SignHeader';
import Button from '../Button/Button';

function Register({goLanding, signIn}){
  return(
    <div className="sign-container">
      <SignHeader 
        handleLogo={goLanding} 
        headerText="Добро пожаловать!"
      />
      <form className="sign-form">
        <label htmlFor="user-name" className="sign-label">Имя
          <input id="user-name" className="sign-input" type="text" placeholder="Виталий" autoComplete="on" required></input>
        </label>
        <label htmlFor="user-mail" className="sign-label">E-mail
          <input id="user-mail" className="sign-input" type="email" placeholder="pochta@yandex.ru" autoComplete="on" required></input>
        </label>
        <label htmlFor="user-password" className="sign-label sign-label__error">Пароль
          <input id="user-password" className="sign-input sign-input__error" type="password" autoComplete="on" required></input>
        </label>
        <span className="sign__error">Что-то пошло не так...</span>
      </form>
      <div className="sign-confirm sign-form__sign-register">
        <Button 
          mode="button_type_sign"
          type="submit" 
          text="Зарегестрироваться"
        />
        <span className="sign__paragraph">Уже зарегистрированы?&nbsp;
          <Button
            mode="button_type_sign-simple"
            text="Войти"
            handleClick={signIn}
          />
        </span>
      </div>
    </div>
  )
}

export default Register