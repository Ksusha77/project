"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?',''),
    c = prompt('Один из последних просмотренных фильмов?',''),
    d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// Место для первой задачи
function firstTask() {
    for(let i = 5; i<=10; i++){
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    for(let i=20; i>=10; i--){
        console.log(i);
        if (i === 13){
            break;
        }
    }
}

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i<=10; i+2){
        console.log(i);
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:
 
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i<=16){
      if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
     i++;
 }
    
}

// Место для пятой задачи

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i < arr.length; i++ ){
        result[i] = arr[i];
    }
    
    console.log(result);
    return result;
}

firstTask();

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++){
        if (typeof(data[i]) === 'number'){
            data[i] = data[i]*2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = data[i] + '- done';
        }
    }
    console.log(data);
    return data;
}

secondTask();

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    
    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }
    
    console.log(result);

    return result;
}

thirdTask();

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++){
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }

    result += "\n";
}

console.log(result);