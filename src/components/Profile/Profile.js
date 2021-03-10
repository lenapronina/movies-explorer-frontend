import React, { useState } from 'react';
import Button from '../Button/Button';
import './Profile.css';

function Profile({goLanding}) {

  const [ isEdit, setEdit ] = useState(false);

// fix function 
  const onChange = () => {
    console.log('меняем');
  }
// fix function 

  const editProfile = () => {
    if(isEdit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  }

  return(
    <div className="profile">
      <div className="profile__data">
        <h2 className="profile__heading">Привет, Виталий!</h2>
        <form className="profile__form">
          <label className="profile__label">Имя
            <input className="profile__input" name="user" type="text" minLength="2" maxLength="40" required="" value="Виталий" onChange={onChange} disabled></input>
          </label>
          <label className="profile__label">Почта
            <input className="profile__input" name="mail" type="mail" value="pochta@yandex.ru" onChange={onChange} disabled></input>
          </label>
        </form>  
      </div>
      <div className="profile__controllers">
        { isEdit ? (
          <>
            <span className="profile__update-error">При обновлении профиля произошла ошибка.</span>
            <Button 
              mode='button_type_profile-save button_color_disabled' 
              text='Сохранить'
              handleClick={editProfile}
            />
          </> 
        ) : (
          <>
            <Button 
              mode='button_type_profile' 
              text='Редактировать'
              handleClick={editProfile}
            />
            <Button 
              mode='button_type_profile button_color_signout' 
              text='Выйти из аккаунта'
              handleClick={goLanding}
            />
          </>)
        }
      </div>
    </div>
  )
}

export default Profile;