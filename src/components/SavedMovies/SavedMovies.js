import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import Footer from '../Footer/Footer';

function SavedMovies({path}) {
  return(
    <>
      <div className="saved-movies">
        <SearchForm />
        <MoviesCardList 
          path={path}
        />
        <div className="saved-movies__divider"></div>
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;