import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ 
  path,
  moviesDisplayCount,
  savedMovies, 
  handleSaveCard,
  handleRemoveCard
}) {

  const moviesListPage = (path === '/saved-movies') ? ' saved-movies__movie-list' : ' movies__movies-list';

  const moviesList = (path === '/saved-movies') ? savedMovies : moviesDisplayCount
  
  return (
    <ul className={`movie-list ${moviesListPage}`}>{
      moviesList ? moviesList.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          filteredMovies={moviesDisplayCount}
          savedMovies={savedMovies}
          handleRemoveCard={handleRemoveCard}
          handleSaveCard={handleSaveCard}
          movieData={movie}
          path={path} 
        />
      )): ('')
      }
    </ul>
  )
}

export default MoviesCardList