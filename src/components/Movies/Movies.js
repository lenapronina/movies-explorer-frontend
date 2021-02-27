import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import Footer from '../Footer/Footer';

function Movies(params) {
  return (
    <>
      <div className="movies movies__footer">
        <SearchForm />
        <MoviesCardList />
        <MoreButton />
      </div>
      <Footer />
    </>
  )
}

export default Movies;
