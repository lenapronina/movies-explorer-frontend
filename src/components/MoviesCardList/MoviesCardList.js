import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ path }) {

  const moviesListPage = (path === '/saved-movies') ? ' saved-movies__movie-list' : ' movies__movies-list'

  return (
    <ul className={`movie-list ${moviesListPage}`}>
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </ul>
  )
}

export default MoviesCardList