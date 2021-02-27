import './Navigation.css';
import Button from '../Button/Button';

function Navigation(){
  return (
    // <div className="navigation navigation_type_profile">
    //   <Button
    //     clss={'button_type_signup'}
    //     text={'Регистрация'}
    //   />
    //   <Button
    //     clss={'button_type_signin'}
    //     text={'Войти'}
    //   />
    // </div>
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
  )
}

export default Navigation;