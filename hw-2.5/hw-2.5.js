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
let f = prompt('Сколько тебе лет');
let limitationAge;
if (f < 0) {
    limitationAge = function () {
        alert('Вы ввели неправильное значение');
    }
} else if (0 <= f <= 12) {
    limitationAge = function () {
        alert('Привет, друг!');

    }
} else if (f >= 13) {
    limitationAge = function () {
        alert('Добро пожаловать!');
    }
}
limitationAge();

//Task 5
function trueIntNumber() {
    while (true) {
        let firstIntNumber = prompt('Введите первое число');
        let lastIntNumber = prompt('Введите второе число');
        if (!firstIntNumber, !lastIntNumber) {
            return ('Одно или оба значения не являются числом');
        } else {
            return (firstIntNumber * lastIntNumber);
        }
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
    return this.p * this.radius ** 2;
}
function getPerimeter() {
    return 2 * this.radius * this.p;
}

const circle1 = {
    p: 3.14,
    radius: 10,
    getCircleleArea: getArea,
    getirclelePerimeter: getPerimeter,
};
const circle2 = {
    p: 3.14,
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