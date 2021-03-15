import React, { useState } from 'react';
import './Register.css';
import SignHeader from '../SignHeader/SignHeader';
import Button from '../Button/Button';

function Register({goLanding, signIn, handleRegister}){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    console.log('21212')
    e.preventDefault();
    handleRegister(name, email, password);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return(
    <div className="sign-container">
      <SignHeader 
        handleLogo={goLanding} 
        headerText="Добро пожаловать!"
      />
      <form 
        className="sign-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="user-name" className="sign-label">Имя
          <input 
            id="user-name"
            className="sign-input"
            type="text"
            placeholder="Виталий"
            autoComplete="on"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <label htmlFor="user-mail" className="sign-label">E-mail
          <input
            id="user-mail"
            className="sign-input"
            type="email"
            placeholder="pochta@yandex.ru"
            autoComplete="on"
            value={email}
            onChange={handleEmailChange}
            required 
          />
        </label>
        <label htmlFor="user-password" className="sign-label sign-label__error">Пароль
          <input 
            id="user-password"
            className="sign-input"
            type="password"
            autoComplete="on"
            value={password}
            onChange={handlePasswordChange}
            required 
          />
        </label>
        <span className="sign__error">Что-то пошло не так...</span>
        <Button 
          mode="button_type_sign"
          type="submit" 
          text="Зарегестрироваться"
        />
      </form>
      <div className="sign-confirm sign-form__sign-register">
        
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