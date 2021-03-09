import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import Footer from '../Footer/Footer';

function Movies({path}) {
  return (
    <>
      <div className="movies movies__footer">
        <SearchForm />
        <MoviesCardList 
          path={path}
          badSearch={false}
        />
        <MoreButton />
      </div>
      <Footer />
    </>
  )
}

export default Movies;
