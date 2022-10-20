import { fetchMovieForId } from '../api/fetchApi';
import { renderMovieInfo } from './modal-movie-markup';
import { localStorageFunction } from './localeStorage-watch&queue';
import { onLoadTrailer } from './trailer';
import { refs } from '../common/refs';
import Spinner from '../common/spinner';
const spinner = new Spinner();

refs.cardsContainer.addEventListener('click', onMovieCardClick);

function onMovieCardClick(e) {
  e.preventDefault();

  if (e.target !== e.currentTarget) {
    const selectedMovie = e.target.closest('li');
    const selectedMovieId = Number(selectedMovie.getAttribute('data-id'));

    spinner.enable();

    fetchMovieForId(selectedMovieId)
      .then(response => {
        modalMovieToggle();
        refs.modal_movie.innerHTML = renderMovieInfo(response);
        if (response.backdrop_path !== null) {
          const background = `https://image.tmdb.org/t/p/original/${response.backdrop_path}`;
          refs.backdrop.style.backgroundImage = `url('${background}')`;
          refs.backdrop.style.backgroundSize = 'cover';
          refs.backdrop.style.backgroundPosition = '50% 50%';
        } else {
          refs.backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.56)';
          refs.backdrop.style.backgroundImage = `none`;
        }

        addModalMovieListeners();
        spinner.disable();
        return response;
      })
      .then(response => {
        console.log(response);
        onLoadTrailer(selectedMovieId);
        localStorageFunction(response);
      })
      .catch(error => console.log(error));
  }
}

function onCloseModalMovie(e) {
  e.preventDefault();

  const isContainsClass =
    e.target.classList.contains('close-btn__icon') ||
    e.target.parentNode.classList.contains('close-btn__icon');

  if (e.code === 'Escape' || isContainsClass || e.target === refs.backdrop) {
    modalMovieToggle();
    clearModalMovieInfo();
    removeModalMovieListeners();
  }
}

function modalMovieToggle() {
  refs.backdrop.classList.toggle('is-hidden');
  refs.modal_movie.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}

function addModalMovieListeners() {
  refs.backdrop.addEventListener('click', onCloseModalMovie);
  window.addEventListener('keydown', onCloseModalMovie);
  refs.modal_movie.addEventListener('click', onCloseModalMovie);
}

function removeModalMovieListeners() {
  refs.backdrop.removeEventListener('click', onCloseModalMovie);
  window.removeEventListener('keydown', onCloseModalMovie);
  refs.modal_movie.removeEventListener('click', onCloseModalMovie);
}

function clearModalMovieInfo() {
  refs.modal_movie.innerHTML = '';
}
