//Task 1
let a = prompt('Число 1');
let b = prompt('Число 2');
function refundNumber() {
    if (a < b) {
        console.log(a);
    } else if (a > b) {
        console.log(b);
    }
}
refundNumber();

//Task 2
let d = prompt('Введите число');
function evenNumber() {
    if (d % 2 === 0) {
        alert('Четное число');
    } else {
        alert('Error');
    }
}
evenNumber();

//Task 3
let e = prompt('Введите число');
function squareNumber() {
    e = e ** 2;
    console.log(e);
}
function returnSquareNumber() {
    e = e ** 2;
    return e;
}
squareNumber();
returnSquareNumber();

//Task 4
let howAge = prompt('Сколько тебе лет');
function fixAge(howAge) {
    if (howAge < 0) {
           return 'Вы ввели неправильное значение';
    } else if (howAge >=0 && howAge <= 12) {
            return 'Привет, друг!';
    } else {
            return 'Добро пожаловать!';
    }
}
alert(fixAge(howAge));

//Task 5
function trueIntNumber() {
        let firstIntNumber = prompt('Введите первое число');
        let lastIntNumber = prompt('Введите второе число');
        if (!firstIntNumber, !lastIntNumber) {
            return ('Одно или оба значения не являются числом');
        } else {
            return (firstIntNumber * lastIntNumber);
        }
}
trueIntNumber();

//Task 6
function backNumber() {

    let numberFirst = prompt('Enter number');

    if (!isNaN(numberFirst)) {
        const numberInCube = numberFirst ** 3;
        console.log(`n в кубе равняется ${numberInCube}`);

    } else {
        console.log('Переданный параметр не являются числом');
    }
}

backNumber();

//Task 7
function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * this.radius * Math.PI;
}

const circle1 = {
    radius: 10,
    getCircleleArea: getArea,
    getirclelePerimeter: getPerimeter,
};
const circle2 = {
    radius: 14,
    getCircleleArea: getArea,
    getirclelePerimeter: getPerimeter,
};
console.log(circle1.getCircleleArea());
console.log(circle1.getirclelePerimeter());
console.log(circle2.getCircleleArea());
console.log(circle2.getirclelePerimeter());

//Task8
//Работа с макетом