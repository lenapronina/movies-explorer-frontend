import React, { useState, useContext, useEffect } from 'react';
import Button from '../Button/Button';
import './Profile.css';
import { useFormHook } from '../../utils/useFormHook';
import { CurrentUserContext } from '../../contexts/UserContext';

function Profile({
  isProfileEdit,
  setProfileEdit,
  handleUpdateUser,
  handleSignOut,
  profileError,
  handleProfileError
}) {

  // assign CurrentUserContext
  const currentUserData = useContext(CurrentUserContext);

  const {values, setValues, handleChange, errors, isValid} = useFormHook();

  function editProfile(){
    setProfileEdit(true);
  }

  function handleSubmitForm(e){
    e.preventDefault();
    handleUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  useEffect(() => {
    setValues({
      name: currentUserData.name,
      email: currentUserData.email
    });
  }, [currentUserData]);

  useEffect(()=> {
    handleProfileError('');
  }, [values])

  return(
    <div className="profile">
      <div className="profile__data">
        <h2 className="profile__heading">{`Привет, ${currentUserData.name}!`}</h2>
        <form
          className="profile__form"
          onSubmit={handleSubmitForm}
          noValidate
        >
          <fieldset className="profile__fieldset">
            <label className="profile__label">Имя
              <input
                className="profile__input"
                name="name"
                type="text"
                minLength="2"
                maxLength="40"
                value={values.name || ''}
                disabled={isProfileEdit ? false : true }
                onChange={handleChange}
                required
              />
            </label>
            <label className="profile__label">Почта
              <input
                className="profile__input"
                name="email"
                type="email"
                value={values.email || ''}
                disabled={isProfileEdit ? false : true }
                onChange={handleChange}
                required
              />
            </label>
            <p className="profile__error">{errors.name || ''}</p>
            <p className="profile__error">{errors.email || ''}</p>
          </fieldset>  
          <div className="profile__controllers">
            { isProfileEdit ? (
              <>
                <span className="profile__update-error">{profileError}</span>
                <Button 
                  mode="button_type_profile-save"
                  text="Сохранить"
                  type="submit"
                  isDisabled={!isValid}
                />
              </> 
            ) : (
              <>
                <Button 
                  mode="button_type_profile" 
                  text="Редактировать"
                  type="button"
                  handleClick={editProfile}
                />
                <Button 
                  mode="button_type_profile button_color_signout"
                  text="Выйти из аккаунта"
                  type="button"
                  handleClick={handleSignOut}
                />
              </>)
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile;