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
};

const DEFAULT_IMAGE_URL = 'https://images.unsplash.com/photo-1487260211189-670c54da558d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1wdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';

const DEFAULT_TRAILER_URL = 'https://www.youtube.com/watch?v=COaXBeiKezw'

const ROUTES_WITHOUT_HEADER = ["/signup", "/signin", "/notFound"];

export { 
  MOVIES_API_BASEURL,
  MAIN_API_BASEURL,
  MOVIES_API_HEADERS,
  CARD_COUNT,
  CARD_COUNT_MORE,
  SCREEN_WIDTH,
  DEFAULT_IMAGE_URL,
  DEFAULT_TRAILER_URL,
  ROUTES_WITHOUT_HEADER
};