import "./styles/RandomMovieGenerator.css";
import popcorn from "./popcorn.png";
import Button from "./components/Button";
import Teste from "./MovieDatabase";
import { useState, useEffect } from "react";
import MovieDatabase from "./MovieDatabase";

// TODO: show genre on screen
// TODO: hide API key
// TODO: show year
// TODO: set up start button

const RandomMovieGenerator = () => {

  const [movie, setMovie] = useState();
  const [poster, setPoster] = useState(movie);
  const [started, setStarted] = useState(true);
  

  useEffect(()=>{
    const pickRandomMovie = async () => {
      
    };
    pickRandomMovie();
  }, [setMovie])



  function randomize(array) {
    return Math.floor(Math.random() * array.length);
  }

  const streamings = ["disney", "netflix", "prime", "hbo"];
  const randomStreaming = streamings[randomize(streamings)];
  const randomPage = Math.floor(Math.random() * 25);

  function start() {
    setStarted(true);
    
  }

  

  return (
    <div className="App">
      <MovieDatabase/>
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
            <img className="poster" alt="movie poster" src={poster} />
            <h2 className="title">{console.log(movie)}</h2>
            <p className="overview"></p>
          </div>
        )}
      </div>
      <Button name="Start" action=""/>
        <div className="bar">
          {/* { !started && <Button action="Start"/>} */}
        </div>
    </div>
  );
};

export default RandomMovieGenerator;
