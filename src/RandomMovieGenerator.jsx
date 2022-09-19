import "./styles/RandomMovieGenerator.css";
import popcorn from "./popcorn.png";
import Button from "./components/Button";

function RandomMovieGenerator() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Random Movie Night</h1>
          <img className="popcorn" src={popcorn} alt="popcorn with sunglasses"></img>
        </header>
        
        <div className="movie-content">
          <span className="streaming" hidden></span>
          <span className="genre" hidden></span>
          <span hidden>O filme é</span>
          <img className="poster" hidden alt="movie poster"/>
          <h2 className="title" hidden></h2>
          <p className="overview" hidden></p>
        </div>
      </div>
      <div className="bar"><Button action="Start"/></div>
    </div>
  );
}

export default RandomMovieGenerator;
