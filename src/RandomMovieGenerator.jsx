import "./styles/RandomMovieGenerator.css";
import popcorn from "./popcorn.png";
import Button from "./components/Button";
import { useState, useEffect } from "react";

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
      try {
        const response = await fetch(
          `https://streaming-availability.p.rapidapi.com/search/basic?country=br&service=${randomStreaming}&type=movie&page=${randomPage}`,
          options
        );
        const data = await response.json();
        const results = await data.results;
        setMovie(results[randomize(results)]);
        setPoster(movie.posterURLs.original);
      } catch (err) {
        console.error(err);
      }
      console.log(movie)
    };
    pickRandomMovie();
  }, [setMovie])

  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': 'e3d485b5d9msh3e3a2f06d0f912ep111791jsnd7e62dbf62bb',
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

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
