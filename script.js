'use strict'

const numberOfFilms = +prompt('How many films have you watched?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastFilm = prompt('What was the last movie you watched?', '');

const lastFilmRating = +prompt('How do you rate this?', '');

personalMovieDB.movies[lastFilm] = lastFilmRating;

console.log(personalMovieDB);

