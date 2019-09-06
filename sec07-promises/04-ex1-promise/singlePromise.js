const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300`;

// 1 Incorrect way to run
/* a. Ajax call using jquery
let globalMovieData = [];
$.ajax({
  url: `${apiUrl}Interstellar`,
  method: "get",
  success: movieData => {
    console.log(movieData);
  }
});
*/

// b. Ajax call using axios
/*
axios
  .get(`${apiUrl}Interstellar`)
  .then(movieData => {
      console.log("inside", movieData.data.results);
      globalMovieData = movieData.data.results;
});
console.log("outside", globalMovieData); // Still [] because already ran
*/

// 2 The Promise way - Anyone who calls getMovieData() is going to get back a Promise {}
function getMovieData(movieTitle) {
  // Scenario 2: Using Promise so we can still display the movieData in the calling function

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

  /*
  // Scenario 1: After we get the movieData we could display in the .then() below
  // async code
  axios.get(`${apiUrl}${movieTitle}`).then(movieData => {
    console.log("Inside function:", movieData);
    // return movieData; // Will not work because this function already ran with a return value of undefined

    // Display data
    document.getElementById("movies").innerHTML =
      movieData.data.results[0].title;
  });
  */
}

document.getElementById("movie-form").addEventListener("submit", event => {
  event.preventDefault(); // Prevent the browser from submitting the form to the next page
  // console.log("Form submitted");
  const movieTitle = document.getElementById("movie-title").value;

  // const movieData = getMovieData(movieTitle); // undefined with scenario 1
  // console.log(movieData);

  // For Promise secenario - display movie data through main here (or place inside the axios call in the getMovieData() function after we get the movieData)
  const movieData = getMovieData(movieTitle); // a Promise {} is returned.  This makes movieData variable a Promise.
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
});
