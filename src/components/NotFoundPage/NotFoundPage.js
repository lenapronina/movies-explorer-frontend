import React from 'react';
import './NotFoundPage.css';
import Button from '../Button/Button';

function NotFoundPage({goBack}) {
  return(
    <div className="notFound">
      <div className="notFound__info">
        <h2 className="notFound__heading">404</h2>
        <p className="notFound__description">Страница не найдена</p>
      </div>
      <Button
        mode={'button_type_goback'}
        handleClick={goBack}
        text='Назад'
      />
    </div>
  )
}

export default NotFoundPage;