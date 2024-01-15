'use strict';

const min = Math.ceil(1);
const max = Math.floor(100);
let number = 0;
let num = null;

const getRandomNumber = () => {
number = Math.floor(Math.random() * (max - min + 1) + min);
console.log(number);
}

const getNumber = () => {
num = Number(prompt(`Отгадайте число, загаданное ботом, от ${min} до ${max}, введите цифрами?`, "0"));
}

getRandomNumber();

const gameBot = () => {
   do {
      getNumber();
      if (Number.isNaN(num)) {  
         alert(`Введите число!`);
      }
      if (num === 0) {
         alert("Вы вышли из игры!");
         return; 
      } 
      if (num > number) {
         alert("Меньше!");
      } 
      if (num < number) {
         alert("Больше!");
      }
   } while (num !== number && num !== 0);
   if (num === number) {
      alert("Правильно!");
      return; 
   }
};

gameBot();
