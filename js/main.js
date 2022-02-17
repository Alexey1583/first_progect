'use strict'; 

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}



const personalMovieDB = {
	'count': numberOfFilms,
	'movies': {},
	'actors': {}, 
	'genres': [], 
	'privat': false
};

function rememberMyFilms() {

	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = +prompt('На сколько оцените его?', '');
		if (a == null && b == null && a == '' && a.length > 50 && b == '') {
			i--;
		} else {
			personalMovieDB.movies[a] = b;
		}

	}
}

rememberMyFilms();


function detectPersonalLevel() {

	if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
		alert('Просмотренно довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}

}

detectPersonalLevel();

writeYourGeneres();

function writeYourGeneres() {
	let i = 0;
	while (i <= 3) {
		let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
		if (genre != '' && genre != null) {
			personalMovieDB.genres[i] = genre;
			i++;
		}
	}
}

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);


// let i = 0;
// while (i < 2) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 			b = +prompt('На сколько оцените его?', '');
// 			if (a != null && b != null && a != '' && a.length <= 50 &&  b != '') {
// 				personalMovieDB.movies[a] = b;
// 				i++;
// 			}
// }

// do {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 			b = +prompt('На сколько оцените его?', '');
// 			if (a != null && b != null && a != '' && a.length <= 50 &&  b != '') {
// 				personalMovieDB.movies[a] = b;
// 				i++;
// 			} 

// } while (i < 2);