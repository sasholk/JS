"use strict";

function firstTask() {
  // Пишем решение вот тут
  let num = 5;
  while (num < 11) {
    console.log(num);
    num++;
  }
}

function secondTask() {
  // Пишем решение вот тут
  // let num = 20;
  for (let i = 20; i > 9; i--) {
    if (i === 12) {
      break;
    }
    console.log(i);
  }
}

function thirdTask() {
  // Пишем решение вот тут
  for (let i = 2; i < 11; i++) {
    if (i % 2) {
      continue;
    }
    console.log(i);
  }
}

function fourthTask() {
  // Пишем решение вот тут
  let i = 2;
  while (i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}

function fifthTask() {
  const arrayOfNumbers = [];

  // Пишем решение вот тут
  for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
  }

  console.log(arrayOfNumbers);
  // Не трогаем
  return arrayOfNumbers;
}
