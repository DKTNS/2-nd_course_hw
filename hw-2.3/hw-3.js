//Task 1
let password = String (prompt('Введите пароль'));
let cheking;
if (password === 'Пароль'){
    cheking = 'Пароль введен верно';
} else {
    cheking = 'Пароль введен неправильно';
}
alert(cheking);

//Task 2
let numeral = prompt('Введите любое число');
if (numeral > 0 && numeral < 10) {
    console.log('Верно');
} else {
    console.log ('Неверно');
}

//Task 3
let d = prompt('Введите первое число');
let e = prompt('Введите второе число');
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Task 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));


//Task 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1': console.log('Зима'); break;
    case '2': console.log('Зима'); break;
    case '12': console.log('Зима'); break;
    case '3': console.log('Весна'); break;
    case '4': console.log('Весна'); break;
    case '5': console.log('Весна'); break;
    case '6': console.log('Лето'); break;
    case '7': console.log('Лето'); break;
    case '8': console.log('Лето'); break;
    case '9': console.log('Осень'); break;
    case '10': console.log('Осень'); break;
    case '11': console.log('Осень'); break;
    default: console.log('Нет такого месяца!');
}

//Task 6
//Адаптивная версия сайта с добавлением эффектов наведения


//Task 7
let correctNumber = Number(prompt('Пожалуйста, введите любое число'));
    if (correctNumber % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }

//Task 8
let clientOS = prompt('');
switch (clientOS) {
    case '0': alert('Установите версию приложения для iOS по ссылке');
    case '1': alert('Установите версию приложения для Android по ссылке');
    break;
}

//Task 9
let clientOS;
const yearReleaseIphone = {
    getUTCFullYear:'2015',
    getUTCMonth:'01',
    getUTCDate:'01'
};
if (yearReleaseIphone.getUTCFullYear >= '2015' && yearReleaseIphone.getUTCMonth >= '01' && yearReleaseIphone.getUTCDate >= '01') {
    if (clientOS === 0) {
        console.log ('Установите облегченную версию приложения для iOS по ссылке');
    }
    if (clientOS === 1) {
        console.log ('Установите облегченную версию приложения для Android по ссылке') 
    }
}else {
    switch (clientOS) {
        case '0': alert('Установите версию приложения для iOS по ссылке');
        case '1': alert('Установите версию приложения для Android по ссылке');
        break;
    }
}
