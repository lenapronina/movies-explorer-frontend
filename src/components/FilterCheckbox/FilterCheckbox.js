import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({
  handleShortMovies
}) {

 return(
  <label className="checkbox-label">
    <input
      name="checkbox"
      type="checkbox" className="checkbox-label__invisible-input"
      onChange={handleShortMovies}
    />
    <span className="checkbox-label__visible-input"></span>Короткометражки
  </label>
 ) 
}

export default FilterCheckbox;