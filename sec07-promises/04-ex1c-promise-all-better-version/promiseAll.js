const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300`;

function getMovieData(movieTitle) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}${movieTitle}`)
      .then(movieData => {
        resolve(movieData.data.results);
      })
      .catch(errorMsg => {
        reject(errorMsg);
      });
  });
}

document.getElementById("movie-form").addEventListener("submit", event => {
  event.preventDefault();

  // Array.from returns an array from a Node List
  const movieTitleArray = Array.from(
    document.getElementsByClassName("movie-title")
  );

  // Get an array of promises
  const moviePromises = movieTitleArray.map(inputElement => {
    return getMovieData(inputElement.value);
  });

  // Promise.all()
  Promise.all(moviePromises).then(promiseData => {
    // console.log(promiseData); // [ [], [], [] ]
    // console.log(`<img src="${imgUrl}${promiseData[0][0].poster_path}"/>`);

    document.getElementById("movies").innerHTML = "";

    document.getElementById(
      "movies"
    ).innerHTML = `<img src="${imgUrl}${promiseData[0][0].poster_path}"/>
                   <img src="${imgUrl}${promiseData[1][0].poster_path}"/>
                   <img src="${imgUrl}${promiseData[2][0].poster_path}"/>`;
  });

  /* Promise.race()
  Promise.race(moviePromises).then(promiseData => {
    document.getElementById(
      "movies"
    ).innerHTML = `<img src="${imgUrl}${promiseData[0].poster_path}"/>`;
  });
  */
});
