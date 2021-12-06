

const API_KEY = "9ddc0f4fb7eede57fa33914e11e20a21";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fecthNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  fetchMovies: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  fetchRecommended: `/movie/13/recommendations?api_key=${API_KEY}`,
  fetchRecommende: `/movie/3/recommendations?api_key=${API_KEY}`,
  fetchSeries: `/tv/45?api_key=${API_KEY}`,
};

export default request;
