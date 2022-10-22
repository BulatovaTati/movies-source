import { refs } from '../common/refs';
import { goToSignIn } from './log-in';

if (refs.openModalBtn) {
  refs.openModalBtn.addEventListener('click', openModalLogIn);
  refs.closeModalBtn.addEventListener('click', closeModalLogIn);
}

function openModalLogIn() {
  document.body.style.overflow = 'hidden';
  refs.buttonShowPassword.addEventListener('click', showPassword);
  refs.modal.classList.remove('is-hidden');
  refs.backdropLogIn.addEventListener('click', offModalLogInForClickBeackdrop);
  document.addEventListener('keydown', offModalLogInForEscape);
}

export function closeModalLogIn() {
  refs.formLogIn.reset();
  refs.buttonRegister.classList.add('disabled_for_signUp');
  refs.buttonRegister.setAttribute('disabled', 'disabled');
  goToSignIn();
  document.body.style.overflow = 'overlay';
  refs.buttonShowPassword.removeEventListener('click', showPassword);
  refs.modal.classList.add('is-hidden');
  refs.backdropLogIn.removeEventListener(
    'click',
    offModalLogInForClickBeackdrop
  );
  document.removeEventListener('keydown', offModalLogInForEscape);
}

function offModalLogInForClickBeackdrop(event) {
  if (event.target === refs.backdropLogIn) {
    closeModalLogIn();
  }
}

function offModalLogInForEscape(event) {
  if (event.key === 'Escape') {
    closeModalLogIn();
  }
}

function showPassword() {
  if (refs.inputPassword.getAttribute('type') === 'password') {
    refs.inputPassword.removeAttribute('type');
    refs.inputPassword.setAttribute('type', 'text');
    refs.iconForShowPassword.classList.add('visually-hidden');
    refs.iconForUnShowPassword.classList.remove('visually-hidden');
  } else {
    refs.inputPassword.removeAttribute('type');
    refs.inputPassword.setAttribute('type', 'password');
    refs.iconForShowPassword.classList.remove('visually-hidden');
    refs.iconForUnShowPassword.classList.add('visually-hidden');
  }
}

// function setThemOnModalLogIn() {
//   if (document.querySelector('body').classList.contains('dark')) {
//     modalDivLogIn.classList.add('modal_login--dark');
//   } else {
//     modalDivLogIn.classList.remove('modal_login--dark');
//   }
// }
