import "./styles/RandomMovieGenerator.css";
import popcorn from "./popcorn.png";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import CreateMovieDatabase from "./components/MovieDatabase";

// TODO: show genre on screen
// TODO: hide API key
// TODO: show year
// TODO: set up start button

const RandomMovieGenerator = () => {
  const [movie, setMovie] = useState();
  const [poster, setPoster] = useState(movie);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const pickRandomMovie = async () => {};
    pickRandomMovie();
  }, [setMovie]);

  return (
    <div className="App">
      <div className="container">
        {!started && (
          <header className="App-header">
            <h1>Random Movie Night</h1>
            <img
              className="popcorn"
              src={popcorn}
              alt="popcorn with sunglasses"
            ></img>
          </header>
        )}

        {started && (
          <div className="movie-content">
            <span className="streaming"></span>
            <img
              className="poster"
              alt="movie poster"
              src="https://m.media-amazon.com/images/M/MV5BOTJiYjBhZDgtMjhiOC00MTIzLThlNGMtMmI1NjIwM2M3YTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
            />
          </div>
        )}
      </div>
      {!started && <Button action={()=>{setStarted(true)}} name="Start" />}
      <div className="bar">
        {started && (
          <div className="movie-content">
            <h2 className="title">The Mummy (1999)</h2>
            <p className="overview">
              At an archaeological dig in the ancient city of Hamunaptra, an
              American serving in the French Foreign Legion accidentally awakens
              a mummy who begins to wreak havoc as he searches for the
              reincarnation of his long-lost love.
            </p>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default RandomMovieGenerator;
