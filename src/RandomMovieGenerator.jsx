import "./styles/RandomMovieGenerator.css";
import popcorn from "./popcorn.png";
import Button from "./components/Button";
import { useState } from "react";

// TODO: show genre on screen
// TODO: hide API key
// TODO: show year
// TODO: set up start button

const RandomMovieGenerator = () => {
  const [movie, setMovie] = useState("");
  const [poster, setPoster] = useState(movie);
  const [started, setStarted] = useState(true);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0c4cb5dceemsh3f18703a677af91p17a387jsn6bb9dac83cfe",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  function randomize(array) {
    return Math.floor(Math.random() * array.length);
  }

  const streamings = ["disney", "netflix", "prime", "hbo"];
  const randomStreaming = streamings[randomize(streamings)];
  const randomPage = Math.floor(Math.random() * 25);

  function start(array) {
    pickRandomMovie();
    setStarted(true);
  }

  const pickRandomMovie = async () => {
    try {
      const response = await fetch(
        `https://streaming-availability.p.rapidapi.com/search/basic?country=br&service=${randomStreaming}&type=movie&page=${randomPage}`,
        options
      );
      const data = await response.json();
      const results = await data.results;
      setMovie(results[randomize(results)]);
      setPoster(movie.posterURLs.original);
      console.log(movie, poster);
    } catch (err) {
      console.error(err);
    }
  };

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
            <span className="genre"></span>
            <span>O filme é</span>
            <img className="poster" alt="movie poster" src={poster} />
            <h2 className="title"></h2>
            <p className="overview"></p>
          </div>
        )}
      </div>
      {!started && (
        <div className="bar">
          <Button function={start} action="Start" />
        </div>
      )}
    </div>
  );
};

export default RandomMovieGenerator;
