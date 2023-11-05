//Task 1
const mstr = 'js';
console.log(mstr.toUpperCase());

//Task 2
function filterString(array, startStr) {
 return array.filter((item) => 
 item.toLowerCase().startWith(startStr.toLowerCase())
 );
}
const strArr = (String) => String.map(d => d.length);
console.log(toUpperCase(String));

//Task 3
const fract = 32.58884;
console.log(Math.ceil(fract), Math.floor(fract), Math.round(fract));

//Task 4
const multiNumbs = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...multiNumbs), Math.max(...multiNumbs));

//Task 5
function randNumb() {
    console.log(Math.floor(Math.random() * 10) + 1);
}
randNumb();

//Task 6
function randArrNumb(a = Number(prompt('Enter number'))) {
    const arrResult = [];
    for (let i = 0; i < a / 2; i++) {
        const arr = Math.floor(Math.random() * a);
        arrResult.push(arr);
    }
    return arrResult;
}
console.log(randArrNumb());

//Task 7
function inNumb3(a = Number(prompt('Enter number')), b = Number(prompt('Enter number'))) {
    let randNumb2 = Math.floor(Math.random() * (b - a) + a);
    return randNumb2;
}
console.log(inNumb3());

//Task 8
let currentDate = new Date();
console.log(currentDate);

//Task 9
function todayDate() {
    let currentDate = new Date();
    return currentDate;
}
function futureDate(currentDate) {
    currentDate.setDate(currentDate.getDate() + 73);
    return currentDate;
}
console.log(futureDate(todayDate()));

//Task 10
function formatDate(dt) {
    let d = new Date(dt);
    let day = d.getDay(),
        dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        monNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        time = d.getTime();
    d.setHours(time);
    return `${d.getDate()} ${monNames[d.getMonth()]} ${d.getFullYear()} - это ${dayNames[day]}. Время: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
console.log(formatDate(d));
