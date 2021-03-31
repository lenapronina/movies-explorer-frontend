import React, { useEffect } from 'react';
import './Login.css';
import SignHeader from '../SignHeader/SignHeader';
import Button from '../Button/Button';
import { useFormHook } from '../../utils/useFormHook';

function Login({
  goLanding,
  goSignUp,
  handleLogin,
  loginError,
  handleLoginError
}) {

  const { values, handleChange, errors, isValid } = useFormHook();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  }

  useEffect(()=> {
    handleLoginError('');
  }, [values])

  return (
    <div className="sign-container">
      <SignHeader
        handleLogo={goLanding} 
        headerText="Рады видеть!"
      />
      <form 
        className="sign-form sign-header__sign-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <fieldset className="sign-form__fieldset">
          <label
            htmlFor="user-mail"
            className={`sign-label ${ errors.email ? 'sign-label__error' :''}`}
          >E-mail
            <input
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
        <div className="sign-confirm sign-form__sign-login">
          <span className="profile__update-error">{loginError}</span>
          <Button 
            mode="button_type_sign"
            type="submit"
            text="Войти"
            isDisabled={!isValid}
          />
          <span className="sign__paragraph">Ещё не зарегистрированы?&nbsp;
            <Button
              mode="button_type_sign-simple"
              type="button"
              text="Регистрация"
              handleClick={goSignUp}
            />
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login;