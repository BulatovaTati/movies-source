import slick from 'slick-carousel';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
import { fetchUpcomingMovies } from '../api/fetchApi';
import { getFromStorage } from './localeStorageServices';
import { refs } from '../common/refs';

const genresObj = getFromStorage('allGenres');

function renderUpcomingMovies(movies) {
  return movies
    .map(
      ({ id, poster_path, title, release_date, vote_average, genre_ids }) => {
        const releaseYear = release_date ? release_date.split('-')[0] : 'no year';

        let filmGenresArray = [];

       if (genre_ids && genre_ids.length > 0) {
          filmGenresArray = genre_ids.map(id => {
            return genresObj[id];
          });

         } else if (genres && genres.length > 0) {
          filmGenresArray = genres.map(({ name }) => {
            return name;
          }
                                       
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : 'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

        return htmlMarkupFilmsSerchHelper(
          id,
          poster,
          title,
          releaseYear,
          vote_average,
          filmGenresArray
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
  filmGenresArray
) {
  return `
    <div class='upcoming__item' data-id=${id}>
        <img data-id=${id} 
        class="upcoming___image" 
        style="border-radius: 5px"
        src=${poster} 
        alt='Movie Poster' 
        loading='lazy' 
        width="100px" 
        height="148px" />
        <div data-id=${id} class='upcoming__info'>
            <p data-id=${id} class='upcoming__info-title'>${title}</p>
            <span data-id=${id} class='upcoming__info-genre'> 
             ${
               filmGenresArray && filmGenresArray.length > 0
                 ? filmGenresArray[0]
                 : 'no genres'
             }</span>
            <p data-id=${id} class='upcoming__info-date'>
            <span data-id=${id} class='upcoming__info-vote'>${vote_average}</span> | 
            <span data-id=${id} class='upcoming__info-year'>${releaseYear}</span>
            </p>
        </div>
    </div>
    `;
}

fetchUpcomingMovies().then(r => {
  const movies = r.results;
  const sortedMovies = movies.filter(movie => 
    movie.backdrop_path !== null &&
    movie.poster_path !== null &&
    movie.genre_ids.length > 0
  );

  refs.imageUpComing.insertAdjacentHTML(
    'beforeend',
    renderUpcomingMovies(sortedMovies)
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
  });
});
