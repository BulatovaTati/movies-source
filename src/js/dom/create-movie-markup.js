import { refs } from '../common/refs';
import { getFromStorage } from '../other/localeStorageServices';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const noPosterImg =
  'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

const genresObj = getFromStorage('allGenres');

export function renderCollection(movies) {
  const markup = movies.map(movie => cardRender(movie)).join('');
  refs.cardsContainer.innerHTML = markup;
}

export function cardRender({
  poster_path,
  title,
  genre_ids,
  genres,
  release_date,
  first_air_date,
  vote_average,
  name,
  id,
  overview,
}) {
  let year = '';
  if (release_date) {
    year = release_date?.slice(0, 4);
  } else {
    year = first_air_date?.slice(0, 4);
  }

  let filmGenresArray;

  if (genre_ids && genre_ids.length > 0) {
    filmGenresArray = genre_ids.map(id => {
      return genresObj[id];
    });
  } else if (genres && genres.length > 0) {
    filmGenresArray = genres.map(({ name }) => {
      return name;
    });
  }

  let movieOverview = overview;

  const overviewInfo = overview.trim().split(' ').length;
  if (overviewInfo === '') {
    movieOverview = 'Sorry there is no overview of that movie';
  } else if (overviewInfo < 3 || overviewInfo > 90) {
    movieOverview = 'Click to read more';
  }

  return `<li class="card__item" data-id="${id}">
  <a href="#" class="gallery-art">
    <div class="card__img--container">
      <img
        class="card__img"
        src="${poster_path === null ? noPosterImg : BASE_IMG_URL + poster_path}"
        alt="Poster of movie"
        loading="lazy"
      />
    </div>
    
    <div class="card__info">
      <h2 class="card__title">${title ? title : name}</h2>
      <div class="card__decr">
        <p class="card__genre">
          ${
            filmGenresArray && filmGenresArray.length > 0
              ? filmGenresArray.splice(0, 2).concat('Others').join(', ')
              : 'no genres'
          }
          <span>${' '}|${' '}</span>
        </p>
        <p class="card__year">${year ? year : 'no year'}</p>
        <p class="card__rating">
          ${vote_average.toFixed(1) ? vote_average.toFixed(1) : 'no rate'}
        </p>
      </div>
    </div>
    <div class="cards-back-text">
      <div class="cards-back__container">
        <h2 class="cards-back__title">OVERVIEW :</h2>
        <span class="description__films"> ${movieOverview} </span>
      </div>
    </div>
    
    <svg class="icon-hand"   height="24" width="24" fill="#FFF">
  <path fill="none" d="M0 0h24v24H0z"/>
  <path d="m18.19 12.44-3.24-1.62c1.29-1 2.12-2.56 2.12-4.32 0-3.03-2.47-5.5-5.5-5.5s-5.5 2.47-5.5 5.5c0 2.13 1.22 3.98 3 4.89v3.26c-2.15-.46-2.02-.44-2.26-.44-.53 0-1.03.21-1.41.59L4 16.22l5.09 5.09c.43.44 1.03.69 1.65.69h6.3c.98 0 1.81-.7 1.97-1.67l.8-4.71c.22-1.3-.43-2.58-1.62-3.18zm-.35 2.85-.8 4.71h-6.3c-.09 0-.17-.04-.24-.1l-3.68-3.68 4.25.89V6.5c0-.28.22-.5.5-.5s.5.22.5.5v6h1.76l3.46 1.73c.4.2.62.63.55 1.06zM8.07 6.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .95-.38 1.81-1 2.44V6.5a2.5 2.5 0 0 0-5 0v2.44c-.62-.63-1-1.49-1-2.44z"/></svg>
  </a>
 
</li>`;
}

export { noPosterImg };
