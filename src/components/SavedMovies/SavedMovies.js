import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import { useFormHook } from '../../utils/useFormHook';

function SavedMovies({
  path,
  isSearching,
  setSearching,
  searchMessage,
  searchFail,
  savedMovies,
  filterMovies,
  handleSaveCard,
  handleRemoveCard,
  getSavedMovies
}) {

  const { values, handleChange } = useFormHook();

  const [selectedShortMovies, setSelectedShortMovies ] = useState(false);

  const handleShortMovies = () => {
    setSearching(true);
    filterMovies(savedMovies, values.movie, !selectedShortMovies);
    setSelectedShortMovies(!selectedShortMovies);
    setTimeout(()=>{
      setSearching(false);
    }, 400)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setSearching(true);
    filterMovies(savedMovies, values.movie, selectedShortMovies);
    setTimeout(()=>{
      setSearching(false);
    }, 400)
  }

  useEffect(()=> {
    getSavedMovies();
  }, []);

  return(
    <>
      <div className="saved-movies">
        <SearchForm 
          initialMovies={savedMovies}
          handleSubmit={onSubmit}
          values={values}
          handleChange={handleChange}
          handleShortMovies={handleShortMovies}
        />
        { isSearching ? (<Preloader />) : (
          searchFail ? (
            <div className="empty-list empty-list__search">
              <p className="empty-list__message">{searchMessage}</p>
            </div>
          ) : (
            <>
            <MoviesCardList
              handleRemoveCard={handleRemoveCard}
              handleSaveCard={handleSaveCard}
              savedMovies={savedMovies} 
              path={path}
            />
            <div className="saved-movies__divider"></div>
            </>
          ) 
        )}
      </div>
      <Footer />
    </>
  )
}

export default SavedMovies;