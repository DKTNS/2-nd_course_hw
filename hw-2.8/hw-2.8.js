//Task 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));

//Task 2
function isPositive(numb) {
    // писать код тут
    if (numb >= 0) {
        return true;
    } else {
        return false;
    }
}
function isMale(idmale) {
    // писать код тут
return idmale.gender === 'male';
}

function filter(array, ruleFunction) {
    // писать код тут
    const result = [];
    for(let item of array) {
        if(ruleFunction(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//Task 3
let t =0;
const interval = setInterval (() => {
    console.log(new Date());
    t +=3;
    if(t >= 30) {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }
}, 3000);

//Task 4
function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Task 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000);
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));