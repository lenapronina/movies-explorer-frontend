import React from 'react';
import './MoviesCard.css';

function MoviesCard() {
  return (
    <li className="movie">
      <img className="movie__preview" alt="Превью фильма" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWdufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
      <div className="movie__info">
        <h2 className="movie__name">33 слова о дизайне33 слова о дизайне33 слова о дизайне33 слова о дизайне</h2>
        <button className="movie__save"></button>
        <p className="movie__timing">1ч 47м</p>
      </div>
    </li>
  )
}

export default MoviesCard;