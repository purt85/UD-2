//'use strict';

let NumOfFilms;

function start() {
    NumOfFilms = +prompt("qani kino", "");

    while (NumOfFilms == '' || NumOfFilms == null || isNaN(NumOfFilms)) {
        NumOfFilms = +prompt('qani kino', '');
    }
}

start();

const personalMovieDB = {
    count: NumOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        const a = prompt(" kinoneric mek@", ""),
            b = prompt("inchqan kgnahateq?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 20) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Err");
            i--;
        }

    }
}
//rememberMyFilms();

function PersLevel() {
    if (personalMovieDB.count < 10) {
        console.log(" qicha ");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log(" normala ");
    } else if (personalMovieDB.count > 30) {
        console.log(" shata ");
    } else {
        console.log(" errooooor ");
    }
}
//PersLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGeners(){
    for(let i = 1; i <= 3; i ++) {
        personalMovieDB.geners[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGeners();

// esa

