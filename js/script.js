'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
   
      if (b != null && a != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

//rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      alert('Просмотренно довльно мало фильмов');
   } else if 
   (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Вы классический зритель');
   } else if 
   (personalMovieDB.count >= 30) {
      alert('Вы киноман');
   } else {
   alert('Произошла ошибка');
   }
}

//detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
   }
}

writeYourGenres();

//----------------------------------------------------------------------------

// console.log( NaN || 2 || undefined ); //2
 
// console.log( NaN && 2 && undefined ); //Nan
 
// console.log( 1 && 2 && 3 ); //3
 
// console.log( !1 && 2 || !3 ); //false
 
// console.log( 25 || null && !3 ); //25
 
// console.log( NaN || null || !3 || undefined || 5); //5
 
// console.log( NaN || null && !3 && undefined || 5); //5
 
// console.log( 5 === 5 && 3 > 1 || 5); //true

//----------------------------------------------------------------------------

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

//----------------------------------------------------------------------------

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

//----------------------------------------------------------------------------

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

//----------------------------------------------------------------------------

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//    for (let j = 0; j < i; j++) {
//       result += "*";
//    }

//    result += '\n';
// }

// console.log(result);

//----------------------------------------------------------------------------