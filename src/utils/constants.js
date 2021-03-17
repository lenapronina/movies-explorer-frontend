const MAIN_API_BASEURL = "https://api.movies-explorer.alexnik42.students.nomoredomains.monster";
const MOVIES_API_BASEURL = "https://api.nomoreparties.co";

const MOVIES_API_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const CARD_COUNT = {
    desktop: 12,
    tablet: 8,
    mobile: 5
};

const CARD_COUNT_MORE = {
  desktop: 3,
  mobile: 2,
};

const SCREEN_WIDTH = {
  desktop: 801,
  mobile: 480
}

export { 
  MOVIES_API_BASEURL,
  MAIN_API_BASEURL,
  MOVIES_API_HEADERS,
  CARD_COUNT,
  CARD_COUNT_MORE,
  SCREEN_WIDTH
};