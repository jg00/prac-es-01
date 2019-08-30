// Destructuring:
const someJSON = {
  vote_count: 541,
  id: 460793,
  video: false,
  vote_average: 5.9,
  title: "Olaf's Frozen Adventure",
  popularity: 96.893887,
  poster_path: "/As8WTtxXs9e3cBit3ztTf7zoRmm.jpg",
  original_language: "en",
  original_title: "Olaf's Frozen Adventure",
  genre_ids: [12, 16, 35, 10751, 14, 10402],
  backdrop_path: "/9K4QqQZg4TVXcxBGDiVY4Aey3Rn.jpg",
  adult: false,
  overview:
    "Olaf is on a mission to harness the best holiday traditions for Anna, Elsa, and Kristoff.",
  release_date: "2017-10-27"
};

/* 2 Destructuring */
const { title, overview, release_date } = someJSON; // keep property name

processData({ title, overview, release_date });

/* 2e Signature of the parameters */
function processData({ title, overview, release_date }) {
  console.log(`${title}, ${release_date}, ${overview}`);
}

/* 2d Further destructure */
// function processData(data) {
//   const { title, overview, release_date } = data;
//   console.log(`${title}, ${release_date}`);
// }

/* 2c Rename example */
// const {
//   title: movieTitle,
//   overview: movieOverview,
//   release_date: x
// } = someJSON;
// console.log(x);

/* 2b One way to get data */
// const title = someJSON.title;
// const overview = someJSON.overview;
// const release_date = someJSON.release_date;

// // Object literal syntax
// processData({
//   title,
//   overview,
//   release_date
// });

// function processData(data) {
//   console.log(data);
// }

/* 3 Destructure nested objects */
const {
  genre_ids: { [0]: firstGenre, [1]: secondGenre } // We further deconstructed the 0 element of genre_ids and called it firstGenre
} = someJSON;
console.log(firstGenre, secondGenre);

/* 4 Destructure arrays */
const [first, second, third] = someJSON.genre_ids;
console.log(second);
const [, , , fourth, fifth] = someJSON.genre_ids;
console.log(fourth);

/* 5 Make use of rest operator */
const [, two, ...others] = someJSON.genre_ids;
console.log(others); // rest of the elements
