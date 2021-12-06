import React, { useEffect, useState } from "react";
import axios from "../../axios";
import request from "../../request";
import "./banner.css";
export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMoveies = async () => {
      const respones = await axios.get(request.fetchRecommende);
      setMovie(
        respones.data.results[
          Math.floor(Math.random() * respones.data.results.length - 1)
        ]
      );
    };
    fetchMoveies();
  }, []);
  //   console.log(movie.backdrop_path);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ... " : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* backgroung image */}
      <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* description */}
        <h2 className="banner_desc">{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="banner_fade"> </div>
    </header>
  );
}
