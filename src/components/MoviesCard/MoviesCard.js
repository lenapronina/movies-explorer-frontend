import React, { useState, useEffect, useCallback } from 'react';
import './MoviesCard.css';
import noPreview from '../../images/movie-nopreview.svg';
import { MOVIES_API_BASEURL } from '../../utils/constants';

import { convertTime } from '../../utils/convertTime';

function MoviesCard({
  path,
  movieData,
  savedMovies,
  handleSaveCard,
  handleRemoveCard
}) {
  
  const [isLiked, setIsLiked] = useState(false);

  const removeCard = () => {
    handleRemoveCard(movieData);
  }

  // ***FIX NEXT STEP**
  const updateThumbnail = (movie) => {
    const url = movie.thumbnail.url;
    movie.thumbnail =  `${MOVIES_API_BASEURL}${url}`;
  }

  // check saved movies list to show likes 
  const checkLike = useCallback(() => {
    const likedItem = savedMovies.some((item) => item.movieId === movieData.movieId);
    if(likedItem){
      setIsLiked(true);
    } else {
      setIsLiked(false)
    }
  }, [])

  // extend remove movie method for /movies path 
  const removeMovie = (movie, savedData)=>{
    const removedMovie = savedData.find( item => item.movieId === movie.movieId);
    return removedMovie;
  }

  const toggleLike = () =>{
    if(isLiked){
      setIsLiked(false);
      handleRemoveCard(removeMovie(movieData, savedMovies));
    } else {
      setIsLiked(true);
      updateThumbnail(movieData);
      handleSaveCard(movieData);
    }
  }

  
  // for movie without image
  const moviePreviewImage = (movieData.image === "") ? noPreview : movieData.image;

  const savedMoviesPath = (path === '/saved-movies') ? true : false;
  
  const likeButtonClass = isLiked ? 'movie__button movie__button_save movie__button_save_active' : 'movie__button movie__button_save';

  useEffect(()=> {
    checkLike()
  }, [checkLike]);

  return (
    savedMoviesPath ? (
    <li className="movie">
      <a href={movieData.trailer} target="_blank" rel="noreferrer">
        <img className="movie__preview" alt="Превью фильма" src={moviePreviewImage}/>
      </a>
      <div className="movie__info movie__info_saved-movies">
        <h2 className="movie__name">{movieData.nameRU}</h2>
        <button
          className='movie__button movie__button_remove'
          onClick={removeCard}
        ></button>
        <p className="movie__timing">1ч 47м</p>
      </div>
    </li>
    ) : (
      <li className="movie">
        <a href={movieData.trailer} target="_blank" rel="noreferrer">
          <img className="movie__preview" alt="Превью фильма" src={moviePreviewImage}/>
        </a>
        <div className="movie__info">
          <h2 className="movie__name">{movieData.nameRU}</h2>
          <button
            className={likeButtonClass}
            onClick={toggleLike}
          ></button>
          <p className="movie__timing">{convertTime(movieData.duration)}</p>
        </div> 
      </li>
    )
    
  )
}

export default MoviesCard;