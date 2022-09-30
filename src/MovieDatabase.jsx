const MovieDatabase = () => {
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

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${randomStreaming}&type=movie&output_language=en&language=en`,
        options
      );
      const data = await response.json();
      const totalPages = await data.total_pages;
      const results = await data.results;
      console.save(data)
    
    } catch (err) {
      console.error(err);
    }
   
  };
  fetchMovies();

// TODO -> get max pages -> 

}

export default MovieDatabase;
    