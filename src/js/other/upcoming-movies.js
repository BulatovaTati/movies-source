const upcomingMovies = document.querySelector('.upcoming__list');

import slick from 'slick-carousel';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
import { fetchUpcomingMovies } from '../api/fetchApi';

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

function getGenres(arrayId) {
  const arr = [];
  for (const value of genres) {
    if (arrayId.includes(value.id)) {
      arr.push(value.name);
    }
  }
  if (arrayId.length > 1) {
    arr.splice(1, arr.length);
  }

  return arr.join(', ');
}

function renderUpconingMovies(movies) {
  return movies
    .map(
      ({ id, poster_path, title, release_date, vote_average, genre_ids }) => {
        const releaseYear = release_date ? release_date.split('-')[0] : 'No';
        const movieGenre = genre_ids ? getGenres(genre_ids) : 'Unknown';
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : 'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

        return htmlMarkupFilmsSerchHelper(
          id,
          poster,
          title,
          releaseYear,
          vote_average,
          movieGenre
        );
      }
    )
    .join('');
}

function htmlMarkupFilmsSerchHelper(
  id,
  poster,
  title,
  releaseYear,
  vote_average,
  movieGenre
) {
  return `
    <div class='upcoming__item' data-id=${id}>
        <img data-id=${id} 
        class="upcoming___image" 
        style = "border-radius: 5px"
        src=${poster} 
        alt='Movie Poster' 
        loading='lazy' 
        width="100px" 
        height="148px" />
        <div  class='upcoming__info'>
            <p class='upcoming__info-title'>
            ${title}
            </p>
            <span class='upcoming__info-genre'>${movieGenre}</span>
            <p class='upcoming__info-date'>
            <span class='upcoming__info-vote'>
            ${vote_average}</span> | 
            <span class='upcoming__info-year'>${releaseYear}
            </span>
            </p>
        </div>
    </div>
    `;
}

fetchUpcomingMovies().then(r => {
  const movies = r.results;
  let sortMovies = [];
  movies.map(movie => {
    if (
      movie.backdrop_path === null ||
      movie.poster_path === null ||
      movie.genre_ids.length === 0
    ) {
      return;
    } else {
      sortMovies.push(movie);
    }
  });

  upcomingMovies.insertAdjacentHTML(
    'beforeend',
    renderUpconingMovies(sortMovies)
  );

  $('.upcoming__list').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '15px',
    edgeFriction: 0.6,
    slidesPerRow: 1,
    swipe: true,
    swipeToSlide: true,
    accessibility: false,
    dots: true,
  });
});
