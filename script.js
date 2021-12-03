'use strict';

// let NumOfFilms;

// //function 

// start();

const personalMovieDB = {
    
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("qani kino", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('qani kino', '');
        }
    },
    rememberMyFilms: () => {
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
    },
    PersLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log(" qicha ");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log(" normala ");
        } else if (personalMovieDB.count > 30) {
            console.log(" shata ");
        } else {
            console.log(" errooooor ");
        }
    },

    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;

        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGeners: function() {
        for (let i = 1; i < 2; i++) {
            
            let genres = prompt(`mutqagreq storaketov`);
            
            if (genres === '' || genres == null) {
                console.log('sxal tvyal kam tvyal chka');
                i--;
            } else {
                personalMovieDB.genres = genres.split(' ');
                personalMovieDB.genres.sort();
            }
        }
        
            personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
           
        });
        //console.log(`Любимый жанр ${personalMovieDB.genres} - ${personalMovieDB.genres[0]}`);
    }

};

//rememberMyFilms();


//PersLevel();


//showMyDB(personalMovieDB.privat); naxkiun stex er kanchec


writeYourGeners();