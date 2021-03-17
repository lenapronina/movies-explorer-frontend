import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  values,
  handleChange,
  handleSubmit,
  handleShortMovies
}) {

  return(
    <div className="search search__checkbox-label">
      <form className="search__form" onSubmit={handleSubmit}>
        <img className="search__icon" alt="Иконка поиска" src={searchIcon}/>
        <input
          name="movie"
          className="search__input"
          placeholder="Фильм"
          value={values.movie || ''} 
          onChange={handleChange}
        />
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox 
        handleShortMovies={handleShortMovies}
      />
    </div>
    
  )
}

export default SearchForm