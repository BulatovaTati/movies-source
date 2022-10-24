import Spinner from '../common/spinner';

import { fetchMovieForId } from '../api/fetchApi';
import { renderMovieInfo } from './modal-movie-markup';
import { localStorageFunction } from './localeStorage-watch&queue';
import { onLoadTrailer } from './trailer';
import { refs } from '../common/refs';
import { modalMovieToggle, addModalMovieListeners } from './modal-movie';

const spinner = new Spinner();
refs.imageUpComing.addEventListener('click', onUpMovieClick);

function onUpMovieClick(e) {
  e.preventDefault();
  if (e.target.nodeName === 'DIV') return;

  if (e.target !== e.currentTarget) {
    const selectedMovieId = e.target.dataset.id;
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
        onLoadTrailer(selectedMovieId);
        localStorageFunction(response);
      })
      .catch(error => console.log(error));
  }
}
