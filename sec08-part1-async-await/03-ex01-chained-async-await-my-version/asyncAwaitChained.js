const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300`;
const peopleUrl = `https://api.themoviedb.org/3/person`;
const castUrl = `https://api.themoviedb.org/3/movie`;

/*
  Chain:
  apiUrl > castUrl > peopleUrl
*/

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

function getCast(movie) {
  // console.log(movie);
  return new Promise((resolve, reject) => {
    axios
      .get(`${castUrl}/${movie.id}/credits?api_key=${apiKey}`)
      .then(castData => {
        // console.log(castData.data.cast[0]);
        resolve(castData.data.cast[0]);
      })
      .catch(errorMsg => {
        reject(errorMsg);
      });
  });
}

function getPerson(person) {
  // console.log(person);
  return new Promise((resolve, reject) => {
    axios
      .get(`${peopleUrl}/${person.id}?api_key=${apiKey}`)
      .then(personData => {
        // console.log(personData.data);
        resolve(personData);
      })
      .catch(errorMsg => {
        reject(errorMsg);
      });
  });
}

async function addMovieToDom(movieTitle) {
  document.getElementById("movies").innerHTML = "";

  const movieData = await getMovieData(movieTitle);
  const castData = await getCast(movieData[0]);
  const personData = await getPerson(castData);
  // console.log(personData.data);

  document.getElementById("movies").innerHTML += `
    <div class="col-sm-4">
      <div>
        <img src="${imgUrl}${movieData[0].poster_path}"
      </div>
      <div>
      <img src="${imgUrl}${personData.data.profile_path}"
      </div>
    </div>
  `;
}

document.getElementById("movie-form").addEventListener("submit", event => {
  event.preventDefault();
  const movieElems = Array.from(document.getElementsByClassName("movie-title"));
  movieElems.forEach(elem => {
    addMovieToDom(elem.value);
  });
});

/* 1 Promises chained version
document.getElementById("movie-form").addEventListener("submit", event => {
  event.preventDefault();

  const movieElem = Array.from(document.getElementsByClassName("movie-title"));
  // console.log(movieElem);

  const moviePromise = getMovieData(movieElem[0].value);
  moviePromise
    .then(movieData => {
      // console.log(movieData);
      return getCast(movieData[0]);
    })
    .then(castInfo => {
      // console.log(castInfo);
      return getPerson(castInfo);
    })
    .then(personInfo => {
      console.log(personInfo.data);
    });
});
*/
