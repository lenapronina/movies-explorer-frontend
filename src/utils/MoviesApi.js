import { MOVIES_API_BASEURL, MOVIES_API_HEADERS } from './constants';

class MoviesApi {
  constructor({baseUrl, headers}){
    this._baseURL = baseUrl;
    this._headers = headers;
  }

  _checkResStatus(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getAllMovies() {
    return fetch(`${this._baseURL}/beatfilm-movies`, {
      headers: this._headers
    })
    .then(res => this._checkResStatus(res));
  }
}


const moviesApi = new MoviesApi({
  baseUrl: MOVIES_API_BASEURL,
  headers: MOVIES_API_HEADERS
});

export default moviesApi;
