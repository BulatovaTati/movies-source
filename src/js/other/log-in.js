import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, update } from 'firebase/database';

import Notiflix from 'notiflix';
import { chooseThemeForNotiflix } from './notiflix';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { refs } from '../common/refs';
import { closeModalLogIn } from './modal-log-in';

const firebaseConfig = {
  apiKey: 'AIzaSyCemdimhSMBD1NGzKdmvslO6rcHKjFKpB8',
  authDomain: 'filmoteka-fe44d.firebaseapp.com',
  projectId: 'filmoteka-fe44d',
  storageBucket: 'filmoteka-fe44d.appspot.com',
  messagingSenderId: '290370989881',
  appId: '1:290370989881:web:f9ac7c10153d4aa7d702e8',
  measurementId: 'G-W98LDSLQQN',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth();

refs.library.addEventListener('click', checkLogInForMyLibrary);

function checkLogInForMyLibrary() {
  chooseThemeForNotiflix();
  if (auth.currentUser === null) {
    refs.library.removeAttribute('href');
    Notiflix.Report.info('Oops', 'Please Log In first 🙈', 'Okay');
  } else {
    refs.library.setAttribute('href', './library.html');
  }
}

let user;

if (refs.formLogIn) {
  refs.formLogIn.addEventListener('submit', onLogin);
}

if (refs.formCheckbox) {
  refs.formCheckbox.onchange = function () {
    if (this.checked) {
      refs.buttonRegister.classList.remove('disabled_for_signUp');
      refs.buttonRegister.removeAttribute('disabled');
    } else {
      refs.buttonRegister.classList.add('disabled_for_signUp');
      refs.buttonRegister.setAttribute('disabled', 'disabled');
    }
  };
}

if (refs.signUp) {
  refs.signUpLink.addEventListener('click', goToSignUp);
}
if (refs.signIn) {
  refs.signInLink.addEventListener('click', goToSignIn);
}

onAuthStateChanged(auth, user => {
  if (user) {
    user.uid;
    onUserLogIn();
  } else {
    onUserLogOut();
  }
});

function onRegister(event) {
  event.preventDefault();
  const username = document.querySelector('#name_1').value;
  const email = document.querySelector('#email_1').value;
  const password = document.querySelector('#password').value;
  if (validateEmail(email) === false || validatePassword(password) === false) {
    Notiflix.Report.info(
      'Wow dude',
      'Email or Password is Outta Line 🙈',
      'Agree'
    );
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
      });
      closeModalLogIn();
      refs.formLogIn.reset();
      Notiflix.Report.success(
        'Nice!',
        'Welcome to Filmoteka! Relax and enjoy your movies 🦥',
        'Thanks!'
      );
    })
    .catch(error => {
      Notiflix.Report.warning(
        'Wait a second',
        'User with such email already exists, unless you want to steal it 👀',
        'Oops'
      );
    });
  user = auth.currentUser;
}

function onLogin(event) {
  event.preventDefault();
  const email = document.querySelector('#email_1').value;
  const password = document.querySelector('#password').value;
  if (validateEmail(email) === false || validatePassword(password) === false) {
    Notiflix.Report.info(
      'Wow dude',
      'Email or Password is Outta Line 🙈',
      'Agree'
    );

    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      });
      closeModalLogIn();
      refs.formLogIn.reset();
      onUserLogIn();
      Notiflix.Report.success(
        'Hello there!',
        'Welcome back to Filmoteka! Already know which movie wanna see? 😁',
        'Nice to be Home!'
      );
    })
    .catch(error => {
      Notiflix.Report.warning(
        'Hmm',
        'Something wrong with your reqwest, please try again 🙊',
        'No problem'
      );
    });
  user = auth.currentUser;
}
if (refs.logOut) {
  refs.logOut.addEventListener('click', e => {
    chooseThemeForNotiflix();
    Notiflix.Confirm.show(
      'Exit confirmation',
      'We hope you had a good time! 💃 🕺 Confirm exit?',
      'Yeap, time to go 👋',
      'Maybe I should stay 👌',
      function okCb() {
        signOut(auth).catch(error => {
          Notiflix.Report.warning(
            'Hah',
            'Did you think you would escape so easily? Have one more try 😁',
            'Dammit'
          );
        });
        Notiflix.Report.success(
          'If your say so...',
          'May the Force be with you! 🌌',
          'I`m still on Light Side!'
        );
      },
      function cancelCb() {
        Notiflix.Report.success(
          'Great!',
          'Glad to hear that, let`s keep chilling 💃 🕺',
          'That`s right!'
        );
      }
    );
  });
}

function goToSignUp() {
  refs.formTitleSignIn.classList.add('visually-hidden');
  refs.formTitleSignUp.classList.remove('visually-hidden');
  refs.formWrapName.classList.remove('visually-hidden');
  refs.formWrapCheckbox.classList.remove('visually-hidden');
  refs.buttonConfirm.classList.add('visually-hidden');
  refs.buttonRegister.classList.remove('visually-hidden');
  refs.signUp.classList.add('visually-hidden');
  refs.signIn.classList.remove('visually-hidden');
  refs.formLogIn.addEventListener('submit', onRegister);
  refs.formLogIn.removeEventListener('submit', onLogin);
}

export function goToSignIn() {
  refs.formTitleSignIn.classList.remove('visually-hidden');
  refs.formTitleSignUp.classList.add('visually-hidden');
  refs.formWrapName.classList.add('visually-hidden');
  refs.formWrapCheckbox.classList.add('visually-hidden');
  refs.buttonConfirm.classList.remove('visually-hidden');
  refs.buttonRegister.classList.add('visually-hidden');
  refs.signUp.classList.remove('visually-hidden');
  refs.signIn.classList.add('visually-hidden');
  refs.formLogIn.addEventListener('submit', onLogin);
  refs.formLogIn.removeEventListener('submit', onRegister);
}

function onUserLogIn() {
  if (refs.headerLogIn && refs.headerLogOut) {
    refs.headerLogIn.classList.add('visually-hidden');
    refs.headerLogOut.classList.remove('visually-hidden');
  }
}

function onUserLogOut() {
  if (refs.headerLogIn && refs.headerLogOut) {
    refs.headerLogIn.classList.remove('visually-hidden');
    refs.headerLogOut.classList.add('visually-hidden');
  }
}

function validateEmail(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) === true) {
    return true;
  } else {
    return false;
  }
}

function validatePassword(password) {
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}
