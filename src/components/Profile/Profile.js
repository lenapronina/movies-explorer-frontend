import React from 'react';
import Button from '../Button/Button';
import './Profile.css';

function Profile(params) {

  const onChange = () =>{
    console.log('меняем')
  }

  return(
    <div className="profile">
      <h2 className="profile__heading">Привет, Виталий!</h2>
      <form className="profile__form">
        <label className="profile__label">Имя
          <input className="profile__input" name="user" type="text" minLength="2" maxLength="40" required="" value="Виталя" onChange={onChange} disabled></input>
        </label>
        <label className="profile__label">Почта
          <input className="profile__input" name="mail" type="mail" value="pochta@yandex.ru" onChange={onChange} disabled></input>
        </label>
      </form>
      <div className="profile__controllers">
        <Button 
          clss='button_type_profile-edit' 
          text='Редактировать'
        />
        <Button 
          clss='button_type_profile-signout' 
          text='Выйти из аккаунта'
        />
      </div>
    </div>
  )
}

export default Profile;