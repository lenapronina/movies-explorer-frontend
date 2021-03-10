import './FilterCheckbox.css';

function FilterCheckbox() {
 return(
  <label className="checkbox-label">
    <input type="checkbox" className="checkbox-label__invisible-input"></input>
    <span className="checkbox-label__visible-input"></span>Короткометражки
  </label>
 ) 
}

export default FilterCheckbox;