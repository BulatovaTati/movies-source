import git from '../../images/sprite.svg';

import tatiWebp from '../../images/footer-team/tetiana-webp.webp';
import dianaWebp from '../../images/footer-team/diana-webp.webp';
import yaroslavWebp from '../../images/footer-team/yaroslav-webp.webp';
import rostWebp from '../../images/footer-team/rost-webp.webp';
import yuraWebp from '../../images/footer-team/Yura-webp.webp';
import vitaliiPolWebp from '../../images/footer-team/vitalPol-webp.webp';
import vitaliiMisWebp from '../../images/footer-team/vitM-webp.webp';
import oleksiiWebp from '../../images/footer-team/oleksii-webp.webp';
import andriiWebp from '../../images/footer-team/andrii-webp.webp';
import oleksWebp from '../../images/footer-team/alex-webp.webp';
import mentor from '../../images/footer-team/mentor-webp.webp';
//
import tatiPng from '../../images/footer-team/tetiana.png';
import dianaPng from '../../images/footer-team/diana.png';
import yaroslavPng from '../../images/footer-team/rost.png';
import rostPng from '../../images/footer-team/diana.png';
import yuraPng from '../../images/footer-team/Yura.png';
import vitaliiPolPng from '../../images/footer-team/vitalPol.png';
import vitaliiMisPng from '../../images/footer-team/vitM.png';
import oleksiiPng from '../../images/footer-team/oleksii.png';
import andriiPng from '../../images/footer-team/andrii.png';
import oleksPng from '../../images/footer-team/alex.png';
import mentorPng from '../../images/footer-team/mentor.png';

//
const ref = document.querySelector('.swiper-wrapper.swiper-wrapper--pad');

const markupModalFooter = `<div class="swiper-slide">
              <picture>
                <source
                  srcset="${tatiWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />
                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${tatiPng}"
                  alt="TeamLead - Tetiana Bulatova"
                  loading="lazy"
                />
              </picture>
              <div class="swiper--flex">
                <span class="swiper__text">Tetiana Bulatova</span>
                <a
                  class="swiper__link"
                  href="https://github.com/BulatovaTati"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
              </div>
              <p class="swiper__comment">
                Hello! My name is Tetiana Bulatova. I was the Team Leader. I
                made a footer and connected a swiper to the modal window of all
                team members. By clicking on the git icon, you can find personal
                works of team members.
              </p>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${dianaWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${dianaPng}"
                  alt="Diana Pustolyakova"
                  loading="lazy"
                />
              </picture>

              <div class="swiper--flex">
                <span class="swiper__text">Diana Pustolyakova</span>
                <a
                  class="swiper__link"
                  href="https://github.com/Diana064"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
                <p class="swiper__comment">
                  Hello! My name is Diana Pustolyakova. Implemented the adaptive
                  layout of the main container, compiled the header of the
                  library page. I wrote styles for photo cards and adapted the
                  dimensions of the card according to the terms of reference.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${yaroslavWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${yaroslavPng}"
                  alt="Yaroslav Taranovskiy"
                  loading="lazy"
                />
              </picture>
              <div class="swiper--flex">
                <span class="swiper__text">Yaroslav Taranovskiy</span>
                <a
                  class="swiper__link"
                  href="https://github.com/YaroslavTaranovskiy"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
                <p class="swiper__comment">
                  Hello! My name is Yaroslav Taranovskiy. I wrote a request for
                  full information about the movie for the movie page, request a
                  list of the most popular movies to date to create a collection
                  on the main page. Was on the support based on the results of
                  the call requests.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${rostWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${rostPng}"
                  alt="Rostyslav Kviatkovskyi"
                  loading="lazy"
                />
              </picture>

              <div class="swiper--flex">
                <span class="swiper__text">Rostyslav Kviatkovskyi</span>
                <a
                  class="swiper__link"
                  href="https://github.com/RostyslavKviatkovskyi"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
                <p class="swiper__comment">
                  Hello! My name is Rostyslav Kviatkovskyi. I made the header of
                  the main page with the ability to switch between pages. When
                  clicking on the "My Library" button displays the user's
                  library. Also implemented the search and display of movies by
                  keyword.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${yuraWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${yuraPng}"
                  alt="Yurii Pohorilets"
                  loading="lazy"
                />
              </picture>

              <div class="swiper--flex">
                <span class="swiper__text">Yurii Pohorilets</span>
                <a
                  class="swiper__link"
                  href="https://github.com/YuriiPohorilets"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
                <p class="swiper__comment">
                  Hello! My name is YuriiPohorilets. I have connected pagination
                  on the main page. When you go to a different page, the
                  corresponding movies will be displayed. Connected Loader
                  (spinner) for asynchronous requests.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${vitaliiPolWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${vitaliiPolPng}"
                  alt="Vitaliy Poliakov"
                  loading="lazy"
                />
              </picture>

              <div class="swiper--flex">
                <span class="swiper__text">Vitaliy Poliakov</span>
                <a
                  class="swiper__link"
                  href="https://github.com/vitalik211287"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
                <p class="swiper__comment">
                  Hello! My name is Vitaliy Poliakov. I implemented the logic of
                  displaying movies on the "Watched" and "Queue" pages.Which
                  shows watched movies and movies added to the user's queue.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${vitaliiMisWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${vitaliiMisPng}"
                  alt="Vitaliy Mishugli"
                  loading="lazy"
                />
              </picture>

              <div class="swiper--flex">
                <span class="swiper__text">Vitaliy Mishugli</span>
                <a
                  class="swiper__link"
                  href="https://github.com/VitaliyMishugli"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
                <p class="swiper__comment">
                  Hello! My name is Vitaliy Mishugli. I implemented uploading of
                  popular movies to the main (first) page. And made a card
                  template of one movie for automatic rendering on the page.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${oleksiiWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${oleksiiPng}"
                  alt="Oleksii Kolisnyk"
                  loading="lazy"
                />
              </picture>

              <div class="swiper--flex">
                <span class="swiper__text">Oleksii Kolisnyk</span>
                <a
                  class="swiper__link"
                  href="https://github.com/Oleksii26"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
                <p class="swiper__comment">
                  Hello! My name is Oleksii Kolisnyk.I wrote the logic of the
                  buttons in the modal window, namely the button "Add to
                  watched" movie adds the movie to the watched movies of the
                  current user. By clicking the "Add to queue" button, the movie
                  is added to the current user's queue.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${andriiWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${andriiPng}"
                  alt="Andrii Stepaniuk"
                  loading="lazy"
                />
              </picture>

              <div class="swiper--flex">
                <span class="swiper__text">Andrii Stepaniuk</span>
                <a
                  class="swiper__link"
                  href="https://github.com/Guns1roses"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
                <p class="swiper__comment">
                  Hello! My name is Andrii Stepaniuk. I implemented a scroll to
                  the top and gave the markup with the possibility to watch the
                  movie trailer.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${oleksWebp} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${oleksPng}"
                  alt="Oleksandr Chyhryn"
                  loading="lazy"
                />
              </picture>

              <div class="swiper--flex">
                <span class="swiper__text">Oleksandr Chyhryn</span>
                <a
                  class="swiper__link"
                  href="https://github.com/Chyhryn"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
                <p class="swiper__comment">
                  Hello! My name is Oleksandr Chyhryn. I create a modal template
                  for one film. I made a modal window close on the ESC key. I
                  realized that after clicking on the movie card, a modal should
                  open on any page with dynamically inserted information about
                  the movie.
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <picture>
                <source
                  srcset="${mentor} 1x"
                  type="image/webp"
                  media="(min-width: 320px)"
                />

                <img
                  width="174"
                  height="174"
                  class="swiper-img"
                  src="${mentorPng}"
                  alt="Mentor - Vladyslav Rokhmaniuk"
                  loading="lazy"
                />
              </picture>

              <div class="swiper--flex">
                <span class="swiper__text">Vladyslav Rokhmaniuk</span>
                <a
                  class="swiper__link"
                  href="https://github.com/botaniq"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" class="swiper__icon">
                    <use href="${git}#icon-github"></use>
                  </svg>
                </a>
              </div>
              <p class="swiper__comment">
                Hello! My name is Vladyslav Rokhmaniuk. I am a GoIT mentor. I
                helped this team in controversial issues, supported and provided
                additional information, articles that could help the team in the
                implementation of the project.
              </p>
            </div>

    `;

ref.innerHTML = markupModalFooter;
