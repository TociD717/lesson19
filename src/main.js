// console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків');

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i

var i = 2;
console.log (++i);
console.log (i++);
console.log (--i);
console.log (i--);

/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// console.log('task 2');
var myNum = 10;
var myTest = 20;

myTest += myNum;
console.log (myTest);

myTest -= myNum;
console.log (myTest);

myTest *= myNum;
console.log (myTest);

myTest /= myNum;
console.log (myTest);

myTest %= myNum;
console.log (myTest);

// myTest
// +=
// –=
// *=
// /=
// %=


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow
// console.log('task 3');


var myPi = Math.PI;
console.log(myPi);

var myRound = Math.round(89.279);
console.log(myRound);

var myRandom = Math.round(Math.random() * 10);
console.log(myRandom);

var myPow = Math.pow(3, 5);
console.log(myPow);


/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj
// console.log('task 4');
var strObj = {
    str : 'Мама мыла раму, рама мыла маму',
    length : 'Мама мыла раму, рама мыла маму'.length
};
console.log (strObj);

/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama

// console.log('task 5');
var isRamaPos = strObj.str.indexOf('рама');
console.log (isRamaPos = strObj.str.indexOf('рама'));
var isRama = isRamaPos !== -1;
console.log (isRama = isRamaPos !== -1);

/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

// console.log('task 6');
var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму','Мама моет раму, Рама держит маму');
console.log (strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму','Мама моет раму, Рама держит маму'));


/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr
// console.log('task 7');
var someStr = 'some STRING';
console.log(someStr = 'some STRING');
var upperStr = someStr.toUpperCase();
console.log(someStr = someStr.toUpperCase());
var lowerStr = someStr.toLowerCase();
console.log(someStr = someStr.toLowerCase());
