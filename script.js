'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();

function start() {
    let numberOfFilms = 0;

    do {
        numberOfFilms = prompt('How many films have you watched?', '');
    } while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms));

    personalMovieDB.count = numberOfFilms;
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) { 
        let lastFilm = null;
        do { 
            lastFilm = prompt('What was the last movie you watched?', '');
        } while(lastFilm == null || lastFilm == '' || lastFilm.length > 50);

        let lastFilmRating = null;
        do {
            lastFilmRating = prompt('How do you rate this?', '');
        } while(lastFilmRating == null || lastFilmRating == '' || isNaN(lastFilmRating));

        personalMovieDB.movies[lastFilm] = lastFilmRating;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
        alert("You've watched quite a few films!");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert('You are a classical spectator!');
    } else if (personalMovieDB.count > 30) {
        alert('You are a movie fan!');
    } else {
        alert('Error!');
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre = null;
        do {
            genre = prompt(`What's your favorite genre at number ${i+1}?`, '');
        } while (genre == null || genre == '');

        personalMovieDB.genres[i] = genre;
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

