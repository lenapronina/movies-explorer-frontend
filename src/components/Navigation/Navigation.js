import React from 'react';
import './Navigation.css';
import Button from '../Button/Button';
import accountIcon from '../../images/navigation-account-icon.svg';

function Navigation({
  path,
  loggedIn,
  mobileMenu,
  signIn,
  signUp,
  goMovies,
  goProfile,
  goSavedMovies
}){

  return (
    !loggedIn ?  (
      <div className="navigation navigation_type_profile">
        <Button
          mode={'button_type_landing button_position_landing'}
          text={'Регистрация'}
          handleClick={signUp}
        />
        <Button
          mode={'button_color_black button_type_landing'}
          text={'Войти'}
          handleClick={signIn}
        />
      </div>
    ) : ( mobileMenu ? (
      <>
        <div className="navigation navigation_type_mobile">
          <div className="navigation__movies-buttons navigation__movies-buttons_type_mobile">
            <Button
              mode="button_type_mobile"
              text="Главная"
              handleClick={goProfile}
            />
            <Button
              mode="button_type_mobile button_type_mobile_active"
              text="Фильмы"
              handleClick={goMovies}
            />
            <Button
              mode="button_type_mobile"
              text="Сохранённые фильмы"
              handleClick={goSavedMovies}
            />
          </div>
          <Button 
            mode="button_type_account"
            text="Аккаунт"
            handleClick={goProfile}
          ><img className="button__image" alt="Иконка профиля" src={accountIcon} /></Button>
        </div>
      </>
      ) : (
        <div className="navigation navigation_type_movies">
          <div className="navigation__movies-buttons">
            <Button
              mode="button_type_movies button_type_movies_active"
              text="Фильмы"
              handleClick={goMovies}
              
            />
            <Button
              mode="button_type_movies button_position_movies"
              text="Сохранённые фильмы"
              handleClick={goSavedMovies}
            />
          </div>
          <Button 
             mode="button_type_account"
             text="Аккаунт"
             handleClick={goProfile}
          ><img className="button__image" alt="Иконка профиля" src={accountIcon} /></Button>
        </div>
      )
    )
  )
}

export default Navigation;


