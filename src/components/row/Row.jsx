import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Player from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";
const baseUrl = "https://image.tmdb.org/t/p/original";
export default function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };

    getMovies();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleclick = (m) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(m?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <h2>{title}</h2>
      {/* container -> posters */}
      <div className="container">
        {movies.map((m) => (
          <img
            onClick={() => handleclick(m)}
            src={`${baseUrl}${isLarge ? m.poster_path : m.backdrop_path}`}
            className={`poster_img ${isLarge && "poster_large"}`}
            alt={m.name}
            key={m.id}
          />
        ))}
      </div>

      {trailerUrl && <Player videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
