'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let count = 0;
do {
    count = +prompt('How many films have you watched?', 0);
} while (count == 0);

personalMovieDB.numberOfFilms = count

for(let i = 0; i < 2; i++) { 
    let lastFilm = null;
    do { 
        lastFilm = prompt('What was the last movie you watched?', '');
    } while(lastFilm == null || lastFilm == '' || lastFilm.length == 0 || lastFilm.length > 50);

    let lastFilmRating = null;
    do {
        lastFilmRating = +prompt('How do you rate this?', 0);
    } while(lastFilmRating == null || lastFilmRating == 0 || lastFilmRating.length == 0 || lastFilmRating.length > 50);

    personalMovieDB.movies[lastFilm] = lastFilmRating;
}

if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
    alert("You've watched quite a few films!");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert('You are a classical spectator!');
} else if (personalMovieDB.count > 30) {
    alert('You are a movie fan!');
} else {
    alert('Error!');
}

console.log(personalMovieDB);

