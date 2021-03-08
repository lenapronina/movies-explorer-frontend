import './Navigation.css';
import Button from '../Button/Button';

function Navigation({mobileMenu}){
  return (
    mobileMenu ? (
      <>
        <div className="navigation navigation_type_mobile">
        <div className="navigation__movies-buttons navigation__movies-buttons_type_mobile">
          <Button
            clss={'button_type_mobile'}
            text={'Главная'}
          />
          <Button
            clss={'button_type_mobile button_type_mobile_active'}
            text={'Фильмы'}
          />
          <Button
            clss={'button_type_mobile button_type_mobile_active'}
            text={'Сохранённые фильмы'}
          />
        </div>
        <Button 
           clss={'button_type_account'}
           text={'Аккаунт'}
        />
        </div>
      </>
    ) : (
      <>
      {/* <div className="navigation navigation_type_profile">
       <Button
        clss={'button_type_signup'}
        text={'Регистрация'}
      />
      <Button
        clss={'button_type_signin'}
        text={'Войти'}
      />
    </div> */}
    <div className="navigation navigation_type_movies">
      <div className="navigation__movies-buttons">
        <Button
          clss={'button_type_movies button_active'}
          text={'Фильмы'}
        />
        <Button
          clss={'button_type_movies'}
          text={'Сохранённые фильмы'}
        />
      </div>
      <Button 
         clss={'button_type_account'}
         text={'Аккаунт'}
      />
    </div>
      </>

    )
    
    
  )
}

export default Navigation;