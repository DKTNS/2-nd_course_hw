// Task 1 
let x;
x = 10;
alert(x);
x = 20;
alert(x);

//  Task 2 
let yearReleaseIphone;
yearReleaseIphone = 'Год выпуска первого iPhone - 2007г.';
alert(yearReleaseIphone);

//  Task 3 
let creatorOfJavaScript;
creatorOfJavaScript = 'Брендан Айк';
alert(creatorOfJavaScript);

// Task 4 
let c = 10;
let d = 2;
let summ = c + d;
let subtraction = c - d;
let multiplication = c * d;
let division = c / d;
alert(` Сумма = ${summ}\n Разность = ${subtraction}\n Произведение = ${multiplication}\n Частное = ${division}`);

// Task 5 
let e = 2;
result = e ** 5;
alert(`2 в 5-й степени = ${result}`);

// Task 6
let a = 9;
let b = 2;
result = a % b;
alert(`Остаток = ${result}`);

//Task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

//Task 8
let age = prompt('Сколько вам лет?');
alert(age);

//Task 9
let user = {
    firstname: "",
    age: Number,
    isAdmin: true,
};
//Task 9.1
user.cityOfResidence = true;
//Task 9.2
user.cityOfResidence = false;
//Task 9.3
delete user.cityOfResidence;
//Task 9.4
user.info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user.info);

//Task 10
let youname = prompt('Укажите имя.');
alert('Привет,' + youname + '!');


