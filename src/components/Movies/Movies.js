import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import { useFormHook } from '../../utils/useFormHook';

function Movies({
  handleSaveCard,
  handleRemoveCard,
  cardCount,
  cardCountMore,
  initialMovies,
  filterMovies,
  savedMovies,
  filteredMovies,
  searchMessage,
  searchFail,
  isSearching,
  setSearching,
  getSavedMovies,
  path,
}) {

  const { values, handleChange } = useFormHook();
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [moviesDisplayCount, setMoviesDisplayCount] = useState([]);
  const [counter, setCounter] = useState(cardCount);
  const [selectedShortMovies, setSelectedShortMovies ] = useState(false);

  const checkMoviesListLength = () => {
    if(filteredMovies.length <= cardCount){
      setMoviesDisplayCount(filteredMovies);
      setShowMoreButton(false);
    } else {
      setMoviesDisplayCount(filteredMovies.slice(0, cardCount));
      setCounter(cardCount + cardCountMore);
      setShowMoreButton(true);
    }
  }

  const handleShortMovies = () => {
    setSearching(true);
    filterMovies(initialMovies, values.movie, !selectedShortMovies);
    setSelectedShortMovies(!selectedShortMovies);
    setTimeout(()=>{
      setSearching(false);
    }, 400)
  }

  const clickMoreButton = () => {
    checkMoreButton(moviesDisplayCount, filteredMovies);
    setMoviesDisplayCount(filteredMovies.slice(0, counter));
    setCounter(counter+cardCountMore);
  }

  const checkMoreButton = (movies, moreMovies) => {
    if((moreMovies.length - movies.length) <= cardCountMore ){
      setShowMoreButton(false);
    } else {
      setShowMoreButton(true);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setSearching(true);
    filterMovies(initialMovies, values.movie, selectedShortMovies);
    setTimeout(()=>{
      setSearching(false);
    }, 400)
  }

  useEffect(()=>{
    checkMoviesListLength();
  }, [filteredMovies]);

  useEffect(()=> {
    getSavedMovies();
  }, []);

  return (
    <>
      <div className="movies movies__footer">
        <SearchForm
          initialMovies={initialMovies}
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
          ):(
            <>
              <MoviesCardList
                handleRemoveCard={handleRemoveCard}
                handleSaveCard={handleSaveCard}
                moviesDisplayCount={moviesDisplayCount}
                savedMovies={savedMovies}
                path={path}
              />
              { showMoreButton ? <MoreButton handleClick={clickMoreButton} />: ''}
              
            </>
          ))
        }
      </div>
      <Footer />
    </>
  )
}

export default Movies;
