import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Row from "./components/row/Row";

import request from "./request";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fecthNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Netflix Recommend" fetchUrl={request.fetchRecommende} />
      <Row title="Netflix Originals" fetchUrl={request.fetchRecommended} />
      {/* <Row title="Netflix Originals" fetchUrl={request.fetchSeries} /> */}
      <Row title="Netflix Movies" fetchUrl={request.fetchMovies} />
      {}
    </div>
  );
}

export default App;
