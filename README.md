# Random Movie Night

The definitive solution to *"you choose"*, *"no, you choose"* in date nights.

## How it works
**Random Movie Night** uses [Streaming Availiability API](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability) to fetch a random movie availiable on streaming services.

The params we use in the requisition are:
* `streaming: []`
* `page: number`

wich are randomized and passed when data is fetched so you never get the same movie twice.

The request is set inside an `UseEffect` hook, wich is called everytime the **Start** button is clicked or the 💔 emoji is pressed and a new random movie is generated.
