//Task 1
let hello = 0;
while (hello < 2) {
    console.log('Привет');
    hello++
}

//Task 2
let number = 1;
while (number <= 5) {
    console.log(number);
    number++
}

//Task 3
let numberNew = 7;
while (numberNew <= 22) {
    console.log(numberNew);
    numberNew++
}

//Task 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for (let many in obj) {
    console.log(`${many} — зарплата ${obj[many]} долларов.`);
}

//Task 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(`number: ${n}`);
console.log(`iteration: ${num}`);

//Task 6
let firstFriday = 5;
for (let i = firstFriday; i <= 31; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}