const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300`;

function getMovieData(movieTitles) {
  const promises = [];

  movieTitles.forEach(movie => {
    promises.push(
      new Promise((resolve, reject) => {
        axios
          .get(`${apiUrl}${movie}`)
          .then(movieData => {
            resolve(movieData);
          })
          .catch(errorMsg => {
            reject(errorMsg);
          });
      })
    );
  });

  return Promise.all(promises);
}

document.getElementById("movie-form").addEventListener("submit", event => {
  event.preventDefault(); // Prevent the browser from submitting the form to the next page
  // console.log("Form submitted");

  const movieTitles = [];
  const movieInput = document.querySelectorAll("#movie-form .movie-title");

  movieInput.forEach(movie => {
    movieTitles.push(movie.value);
  });

  let movies = getMovieData(movieTitles);

  movies
    .then(movies => {
      document.getElementById("movies").innerHTML = "";
      for (let movie of movies) {
        // console.log(movie.data.results[0].poster_path);
        // console.log(`<img src="${imgUrl}${movie.data.results[0].poster_path}"/>`);

        document.getElementById(
          "movies"
        ).innerHTML += `<img src="${imgUrl}${movie.data.results[0].poster_path}"/>`;
      }
    })
    .catch(errMsg => {
      console.log(errMsg);
    });
});
