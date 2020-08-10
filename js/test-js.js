'use strict';

// const num = 12.2;
// console.log(Math.round(num));

// const numSecond = '12.2px';
// console.log(parseInt(numSecond));
// console.log(parseFloat(numSecond));

////////////////  19. Callback- функции  ////////////////
//  (Callback- функции которая должна быть выполнена после того как другая функция завершит свое выполнение!)

// function first() {
//   // Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

/////////////  20. Объекты, деструктуризация объектов (ES6)  /////////////

//  (Прототипно ориентированный язык - Java Script)

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function () {
//     console.log('Test');
//   }
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

// Перебор 1
// console.log(Object.keys(options));
// console.log(Object.keys(options).length);

/////////////////////
// console.log(options['colors']['border']);

// delete options.name;
// console.log(options);

// Перебор 2

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);

/////////////  21. Массивы и псевдомассивы  /////////////

// const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// // arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// console.log(products);

// const arr = [1, 2, 3, 6, 8];

// or

// const arr = [10, 2, 30, 16, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// const str = prompt('', '');
// const products = str.split(', ');
// // console.log(products);
// console.log(products.join('; '));

//  псевдомассив - просто структура , которая хранит данные по порядку

/////////////  22. Передача по ссылке или по значению, Spread оператор(ES6 - ES9); /////////////

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

///////////////////////////
// function copy(mainObj) {
//   let objCopy = {};
//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
///////////////////////////

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20
// };

// // console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

//  3й метод

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'lksdfnlsnfl';

// console.log(newArray);
// console.log(oldArray);

// //  (assign()) оператор(ES6 - ES9)  (оператор разворота)

// const video = ['youtube', 'vimeo', 'rutube'],
//   blogs = ['wordpres', 'livejournal', 'bloger'],
//   internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// // 4й метод

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = { ...q };

//  23. Основы ООП, прототипно-ориентированное наследование

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

/////

const soldir = {
  //  1
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello');
  }
};

const john = Object.create(soldir); // Джон прототипно наследуеться от солдата

// const john = {
//   //  1
//   health: 100
// };

// john.__proto__ = soldir; //  Старая версия использования
// Object.setPrototypeOf(john, soldir); //  1

john.sayHello(); //  1

// console.log(john.armor);

// console.log(john.sayHello);
