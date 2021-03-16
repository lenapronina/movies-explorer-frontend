import React, { useEffect } from 'react';
import './Register.css';
import SignHeader from '../SignHeader/SignHeader';
import Button from '../Button/Button';
import { useFormHook } from '../../utils/useFormHook';

function Register({
  goLanding,
  goSignIn,
  handleRegister,
  registerError,
  handleRegisterError
}){

  const { values, handleChange, errors, isValid } = useFormHook();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
  }

  useEffect(()=> {
    handleRegisterError('');
  }, [values])

  return(
    <div className="sign-container">
      <SignHeader 
        handleLogo={goLanding} 
        headerText="Добро пожаловать!"
      />
      <form 
        className="sign-form sign-header__sign-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <fieldset className="sign-form__fieldset">
          <label
            htmlFor="user-name"
            className={`sign-label ${ errors.name ? 'sign-label__error' :''}`}
          >Имя
            <input 
              id="user-name"
              name="name"
              className={`sign-input ${ errors.name ? 'sign-input__error' :''}`}
              type="text"
              placeholder="Виталий"
              autoComplete="on"
              value={values.name || ''}
              onChange={handleChange}
              required
            />
            <span className="sign__error">{errors.name || ''}</span>
          </label>
          <label
            htmlFor="user-mail"
            className={`sign-label ${ errors.email ? 'sign-label__error' :''}`}
          >E-mail
            <input
              id="user-mail"
              name="email"
              className={`sign-input ${ errors.email ? 'sign-input__error' :''}`}
              type="email"
              placeholder="pochta@yandex.ru"
              autoComplete="on"
              value={values.email || ''}
              onChange={handleChange}
              required 
            />
            <span className="sign__error">{errors.email || ''}</span>
          </label>
          <label
            htmlFor="user-password"
            className={`sign-label ${ errors.password ? 'sign-label__error' :''}`}
          >Пароль
            <input 
              id="user-password"
              name="password"
              className={`sign-input ${ errors.password ? 'sign-input__error' :''}`}
              type="password"
              autoComplete="on"
              minLength="2"
              value={values.password || ''}
              onChange={handleChange}
              required 
            />
            <span className="sign__error">{errors.password || ''}</span>
          </label>
        </fieldset>
        <div className="sign-confirm sign-form__sign-register"> 
          <span className="profile__update-error">{registerError}</span>
          <Button 
            mode="button_type_sign"
            type="submit" 
            text="Зарегестрироваться"
            isDisabled={!isValid}
          />
          <span className="sign__paragraph">Уже зарегистрированы?&nbsp;
            <Button
              mode="button_type_sign-simple"
              text="Войти"
              type="button"
              handleClick={goSignIn}
            />
          </span>
        </div>
      </form>  
    </div>
  )
}

export default Register