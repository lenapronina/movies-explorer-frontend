import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// import Preloader from '../Preloader/Preloader';

function SearchForm(params) {
  return(
    <div className="search search__checkbox-label">
      <form className="search__form">
        <img className="search__icon" alt="Иконка поиска" src={searchIcon}/>
        <input className="search__input" placeholder="Фильм"></input>
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox />
      {/* <Preloader /> */}
    </div>
    
  )
}

export default SearchForm