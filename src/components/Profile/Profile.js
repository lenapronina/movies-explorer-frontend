import React, { useState } from 'react';
import Button from '../Button/Button';
import './Profile.css';

function Profile(params) {

  const [ isEdit, setEdit ] = useState(false);

  const onChange = () =>{
    console.log('меняем')
  }

  const editProfile = () => {
    if(isEdit) {
      console.log('редактируем');
      setEdit(false)
    } else {
      console.log('не редактируем');
      setEdit(true)
    }
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
        { isEdit ? (
          <>
            <span className="profile__update-error">При обновлении профиля произошла ошибка.</span>
            <Button 
              clss='button_type_profile-save button_type_profile-save_disabled' 
              text='Сохранить'
              handleClick={editProfile}
            />
          </> 
        ) : (
          <>
            <Button 
              clss='button_type_profile-edit' 
              text='Редактировать'
              handleClick={editProfile}
            />
            <Button 
              clss='button_type_profile-signout' 
              text='Выйти из аккаунта'
            />
          </>)
        }
      </div>
    </div>
  )
}

export default Profile;