import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ path, badSearch }) {

  const moviesListPage = (path === '/saved-movies') ? ' saved-movies__movie-list' : ' movies__movies-list';

  return (
    badSearch ? (
      <div className="empty-list empty-list__search">
        <p className="empty-list__message">Фильмы не найдены</p>
      </div>
    ) : (
      <ul className={`movie-list ${moviesListPage}`}>
      <MoviesCard path={path} />
      <MoviesCard path={path} />
      <MoviesCard path={path} /> 
      <MoviesCard path={path} />
      <MoviesCard path={path} />
      <MoviesCard path={path} />
      <MoviesCard path={path} />
      <MoviesCard path={path} />
    </ul>
    )
  )
}

export default MoviesCardList