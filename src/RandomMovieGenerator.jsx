import "./styles/RandomMovieGenerator.css";
import popcorn from "./popcorn.png";
import Button from "./components/Button";
import { useState, useEffect } from "react";

// TODO: turn movie infos into card with props

const RandomMovieGenerator = () => {
  const [movie, setMovie] = useState();
  const [poster, setPoster] = useState(movie);
  const [title, setTitle] = useState(movie);
  const [year, setYear] = useState(movie);
  const [overview, setOverview] = useState(movie);
  
  const [started, setStarted] = useState(false);

  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };
  function randomize(array) {
    return Math.floor(Math.random() * array.length);
  }

  const streamings = ["disney", "netflix", "prime", "hbo"];
  const randomStreaming = streamings[randomize(streamings)];
  const randomPage = Math.floor(Math.random() * 200);

  useEffect(() => {
    const pickRandomMovie = async () => {
        try {
          const response = await fetch(
            `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${randomStreaming}&type=movie&page=${randomPage}&output_language=en&language=en`,
            options
          );
          const data = await response.json();
          const results = await data.results;
          setMovie(results[randomize(results)]);
          setPoster(movie.posterURLs.original);
          setTitle(movie.title);
          setYear(movie.year);
          setOverview(movie.overview);
        } catch (err) {
          console.error(err);
        }
       
    };
    pickRandomMovie();
  }, [started]);

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
            <span className="streaming">{randomStreaming}</span>
            <img
              className="poster"
              alt="movie poster"
              src={poster}
            />
          </div> 
        )}
      </div>
      {!started && <Button action={()=>{setStarted(true)}} name="Start" />}
      <div className="bar">
        {started && (
          <div className="movie-content">
            <h2 className="title">{`${title} (${year})`}</h2>
            <p className="overview">{overview}</p>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default RandomMovieGenerator;
