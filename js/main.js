// console.log(2002);
// console.log(2 + "2");

// alert("Привет посетитель");

// var a = 10; //устаревший способ создания переменной с помошью конструкции var
// let b = 20; //современный способ создания изменяемой переменной с помощью конструкции let
// const c = 30; //современный способ создания НЕ изменяемой переменной с помощью конструкции const

// var - можно вызвать раньше, чем объявили
// const - нельзя перезаписать
// let - простой способ создания изменяемой переменной

// типы данных
// Числовой number 1
//infinity  ---> математическая бесконечность больше любого числа, 2 способа получения
// console.log(Infinity); ---> можно вызвать намеренно, просто написав 'infinity'
// console.log(20 / 0); ----> нарушение математических принципов

//NaN ---> вычислительная ошибка
// console.log(NaN); намеренно
// console.log("строка" + 20);
//исключение
// console.log(NaN ** 0);

//BigInt просто добавляем в конец числа букву n и снимаем ограничения 2
//console.log(564544515315644451212n);

//строковый тип данных 3

// let str1 = "Jojo"; //простые ковычки
// let str2 = "Jojo2"; //простые ковычки
// let str3 = `ANime ${str1} ${str2} ${2 + 2 * 100} `; // функциональные

// console.log(str1);
// console.log(str2);
// console.log(str3);

// bulean логический 4

// let check = true;
// let offcheck = false;
// console.log(4 < 1);

// NULL пустое значение/ значение отсутствия значения 5
//console.log(null); один способ получения задать его самостоятельно

// undefined значение не присвоено 6
//let a;
//console.log(a);

// typeof выдаёт типы данных

// console.log(typeof undefined);
// console.log(typeof 564513515151);
// console.log(typeof 10n);
// console.log(typeof "cat");
// console.log(typeof true);
// console.log(typeof null);

// document.getElementById("first").innerHTML = "<h1>Guldasta</h1>";  ---> получить элемент по id
// document.getElementById("First").innerHTML = 666;
// document.getElementById("First").innerHTML = "Anime";

//document.querySelector("#one").innerHTML = 666;  находит первый встречный элемент по задвнному значению

// let inp = document.querySelector(".text");
// let btn = document.querySelector(".btn");
// let div = document.querySelector(".qwe");

//Самый быстрый перевод из строки в числовое значение является унарный плюс ( просто плюс )

// btn.onclick = function () {
//   console.log("Da");
//   let e = inp.value;
//   div.innerHTML = e;
//   inp.value = "";
// };

// console.log(a);

// действие выполнится если условие истино тру = true

// if(условие){
//     действие
// }

// if (a == 27) {
//   alert("Yes");
// } else {
//   alert("No");
// }

//lesson 4

// let a = prompt("В каком году вышел ходячий замок?");

// if (a < 2004) {
//   console.log("Рано");
// } else if (a > 2005) {
//   console.log("Поздно");
// } else {
//   console.log("Верно");
// }
// let((a = 10));

// if (a == 5) {
//   console.log(1);
// } else if (a > 6) {
//   console.log(2);
// } else if (a > 7) {
//   console.log(5);
// } else {
//   console.log(3);
// }

// ?  ---->  Тернарный оператор

// let day = prompt("Сколько дней в неделе?");
// let week;

// if (day == 7) {
//   week = true;
// } else {
//   week = false;
// }
// console.log(week);

//            if       (    ) else
// let week = day == 7 ? true    :    false;

// Let переменная = Условие ? Первый вариант, если условие истинно (Аналог тру) : Второй вариант, если условие ложно ( аналог  фолс )

// console.log(week);

// let number = 0;
// if (number > 0){
//   console.log('Число положительное');
// }
// else if (number < 0){
//   console.log('Число отрицательное');
// }
// else {
//   console.log('Число равно 0');
// }

//  let age = 20;
//  if (aje > 18){
// console.log('Доступ разрешён');
// }
// else{
//   console.log('Доступ запрещён');
// }

// Математические операторы

// Сложение +
// Вычитание -
// Умножение *
// Деление /
// Взятие остатка %
// Возведение в степень **

//console.log(5 ** 3);

//console.log(10 % 4); // используется при необходимости  получении какого либо числа

//let num = 20;
//if (num % 2 == 0) {
//console.log(" Число чётное");
//}

//console.log(8 ** 5);

//console.log(201 % 5);

// Операторы сравнения

//console.log(10 | = 10);

// Логические операторы всего 3.

// операторы  или --->   ||

//  True || True = TRUE
//  False || True = TRUE
//  TRUE || FALSE = TRUE
//  FALSE || FALSE = FALSE

// let a = 10;
// let b = 5;
// if (a > 20 || b > 3) {
//   console.log(123);
// }

//  Оператор и --->  &&

// True && ture = true
// false && true = false
// True && false = false
// False && false = false

// let a = 10;
// let b = 5;
// if (b > 3 && a < 20) {
//   console.log(123);
// }

//  Оператор отрицания
// console.log(!true);

// Lesson 5

// Сложение строк ----> конкетенация
// console.log ('HELLO' + 'WORLD')

// Урок 5 - Циклы

// for
// while служебное слово, название цикла, более устаревший

// 1 служебное слово
// 2 условие по аналогии с  if, пока условие истино, то тело цикла будет выполнятся
// 3 тело цикла
// 3.1 это счётчик
//Один полный проход цикла назыается ----> итерацией /( итерация цикла )

// 1 итерация а = 0
// 2 итераци а = 1
// 3 итераци а = 2
// 4 итерация а = 3 и 3<3  выдаёт  false  и цикл прерывается

// let a = 1;

// // 1      2
// while (a < 4) {
//   // 3
//   console.log(a); //  тело цикла в фигурных скобках
//   // 3.1

//   a ++; // инкремент или оператор увеличения на единицу
// }

// let a = 10;

// do {
//   console.log(a);
//   a++;
// } while (a < 10);

//Начало     условие счётчик ---> работает пока условие истино
// let i = 0;
// for (;;) {
//   console.log(i++);
//   if (i == 10) {
//     break;
//   }
// }

// break  прерывание цикла

// let i = 0;
// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// continue прерывает текущую итерацию цикла

// начало let i - 0
// условие i < 3
// счетчик i++

//for (начало; условие; шаг) {
// ... тело цикла ...
// }

// Выполнить начало
// → (Если условие == true → Выполнить тело, Выполнить счетчик)
// → (Если условие == true → Выполнить тело, Выполнить счетчик)
// → (Если условие == true → Выполнить тело, Выполнить счетчик)

// Выполнить начало
// let i = 0
// Если условие == true => Выполнить тело, выполнить счетчик
// if(i<3){console.log(i) i++}
// Если условие == true => Выполнить тело, выполнить счетчик
// if(i<3){console.log(i) i++}
// Если условие == true => Выполнить тело, выполнить счетчик
// if(i<3){console.log(i) i++}
//конец, потому что теперь i = 3

// Практика

// for (let i = 2500; i < 3000; i += 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// ------------------------------------------------------------------------------------------

//  Lesson 6

// if()
// else if()
// else if()
// else if()
// else if()
// else

// макет ===========================

// switch(x){
//   case 'Значение 1' : // аналог if( x === 'Значение 1')
//   ....
//   [break]

//   case 'Значение 2' : // аналог if( x === 'Значение 2')
//   ....
// [break]
// default    //  аналог  else
// .....
// }

// let a = 25;

// switch (a) {
//   case 5:
//     alert(1);
//     break;
//   case 10:
//     alert(2);
//   // break;
//   case 15:
//     alert(3);
//     break;
//   default:
//     alert(4);
// }

//проверка в switch через строгое сравнение ===

// let a = "1";
// let b = 0;
// console.log(typeof +a);

// switch (+a) {
//   case b + 1:
//     alert(
//       "выполниться, т.к.значение + а будет числовым что равно числовой единице"
//     );
//     break;
//   default:
//     alert("Это не выполнится");
// }

// Это группирвка кэйсов      ==============================

// let a = 5;
// switch (+a) {
//   case 12:
//     alert("Правильно");
//     break;
//   case 5: // группируем два кейса
//   case 12:
//   case 20:
//     alert("Не правильно ");
//     alert("Может тебе взять курс по матану ");
//     break;
//   default:
//     alert("Результат кривой");
// }

// let arg = prompt(" Введите число");
// switch (+arg) {
//   case "0":
//   case "1":
//     alert(" один или ноль ");
//     break;
//   case "2":
//     alert(" Два");
//     break;
//   case 3: //  "3"
//     alert(" Никогда не выполнится ");
//     break;
//   default:
//     alert("Значение не известно");
// }

// Операторы нулевого слияния ========================

//ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ возвращает первое определенное значение, которое не равно не null, не undefined

// let firstName = null;
// let lastName = null;
// let nickName = "Timur001";

// покажет первое определенное значение
// alert(firstName ?? lastName ?? nickName ?? " аноним");

//  оператор ИЛИ возвращает первое истиное значение
//alert(firstName || lastName || nickName || " аноним");

//  оператор ИЛИ возвращает первое истиное значение
// оператор ?? возвращает первое значение которое определено

// lesson 7  ФУНКЦИИ  =========================================  3 основных способа  НАБОР  ОПРЕДЕЛЕННЫХ ДЕЙСТВИЙ

//  1 вариант вызова функции
// function one() {
// в фигурных скобках пишется тело функции
//console.log(" Наша первая функция ");
// let a - prompt(' Сколько тебе лет ?')
//}

// one();

//  второй вариант вызова функции это вызов по клику ===============

// let btn = document.querySelector(".btn");

// function one() {
//   let qwe = document.querySelector(".qwe");
//   let age = prompt("Сколько тебе лет?");
//   if (age < 18) {
//     qwe.innerHTML = "<h1>Ты не достиг определенного возраста</h1>";
//   } else {
//     qwe.innerHTML = "<h1>Welcome</h1>";
//   }
// }
// btn.onclick = one; // не ставим круглые скобки

//   function borsch() {
// .... Ряд команд
// Поставить кастрюлю
// Включить огонь
// Нарезать капусту
// Нарезать лук
// Нарезать свёклу
// Положить всё в кастрюлю
// }

// ФУНКЦИИ = НАБОР ДЕЙСТВИЙ ===========

// function one() {
//   console.log("func");
//   return 666
// }

// let a = 8;
// let b = 9;

// function multiply(){
//     console.log(a * b);
//     return a * b
// }

// console.log(multiply() * 9);

// let a = prompt(" Ваше имя  ");
// function one(tim) {
//   let qwe = document.querySelector(".qwe");
//   qwe.innerHTML = " Привет ${tim}";
// }

// one(a);

// function(x, y){
//     return x * y
// }
// console.log(one(2,3));

// ========================================

// При создании функции мы указываем параметры.
// При вызове функции мы указываем аргументы
// Функция всегда должна что-то возвращать return(бывают исключения, маленькие функции
// без использования математических операций)

// После return ничего выполнятся не будет.
// ========================================

//  Анонимные функции

let btn = document.querySelector(".btn");

btn.onclick = function () {
  console.log(" Эта функция у нас анонимная ");
};

// Анонимная функция используется там, где функция должна вызваться только 1 раз

// 3 основных способа

// declaration

// one();

// function one() {
//   console.log(1);
// }

// // expression

// let a = function () {
//   console.log(2);
// };
// a();

// // Стрелочная функция
// let b = () => {
//   console.log(3);
// };

// b();
//=======================================

// lesson 8 DOM

// const one = document. querySelector('.one')
// one.style.color = 'red'
// // camelCase
// one.style.paddingLeft = 150px'
// console.log(one.style);
// one.classLisst.add('black')

fetch("https://randomuser.me/api")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.results[0].email);

    console.log(data.results[0].phone);
  });
