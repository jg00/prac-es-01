const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300`;

/*
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
});
*/

// 1 Example callback hell. Blocking code intentional. Runs on load.
axios
  .get(`${apiUrl}rocky`)
  .then(movieData => {
    axios
      .get(`${apiUrl}titanic`)
      .then(movieData2 => {
        axios
          .get(`${apiUrl}grease`)
          .then(movieData3 => {
            console.log(movieData.data.results);
            console.log(movieData2.data.results);
            console.log(movieData3.data.results);
          })
          .catch(errorMsg3 => {
            console.log(errorMsg3);
          });
      })
      .catch(errorMsg2 => {
        console.log(errorMsg2);
      });
  })
  .catch(errorMsg => {
    console.log(errorMsg);
  });
