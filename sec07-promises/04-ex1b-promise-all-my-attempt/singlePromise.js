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
            // console.log("Inside function:", movieData);
            resolve(movieData);
          })
          .catch(errorMsg => {
            // console.log(errorMsg);
            reject(errorMsg);
          });
      })
    );
  });
  return promises;

  /*
  return new Promise((resolve, reject) => {
    // async code
    // SIDE NOTE axios, ajax already returns a Promise by default
    // We could just do a return axios.. and remove the resolve, reject and replace with returns.
    axios
      .get(`${apiUrl}${movieTitle}`)
      .then(movieData => {
        console.log("Inside function:", movieData);
        // return movieData; // Will not work because this function already ran with a return value of undefined

        resolve(movieData.data.results); // resolve will cause the .then in the main function to run
      })
      .catch(errorMsg => {
        reject(errorMsg);
      });
  });
*/
}

document.getElementById("movie-form").addEventListener("submit", event => {
  event.preventDefault(); // Prevent the browser from submitting the form to the next page
  // console.log("Form submitted");

  const movieTitles = [];
  const movieInput = document.querySelectorAll("#movie-form .movie-title");

  movieInput.forEach(movie => {
    movieTitles.push(movie.value);
  });

  let promiseObjects = getMovieData(movieTitles);
  // console.log(promiseObjects);

  Promise.all(promiseObjects).then(movies => {
    console.log("All promises done");
    // console.log(movies);

    // for (let movie of movies) console.log(movie.data.results[0].poster_path);
    for (let movie of movies) {
      console.log(movie.data.results[0].poster_path);

      // STOPPING POINT.  TRY TO GET TO PRINT IMAGES
      // document
      //   .getElementById("movies")
      //   .innerHTML(`<img src=${imgUrl}${movie.data.results[0].poster_path} />`);
    }
  });

  /*
  // For Promise secenario - display movie data through main here (or place inside the axios call in the getMovieData() function after we get the movieData)
  const movieData = getMovieData(movieTitles); // a Promise {} is returned.  This makes movieData variable a Promise.
  console.log(movieData); // Promise { <Pending> }
  movieData
    .then(data => {
      console.log("Main:", data);
      console.log(`${imgUrl}${data[0].poster_path}`);

      // Display on the page
      document.getElementById(
        "movies"
      ).innerHTML = `<img src=${imgUrl}${data[0].poster_path} />`;
    })
    .catch(errorMsg => {
      console.log(errorMsg);
    });
*/
});
