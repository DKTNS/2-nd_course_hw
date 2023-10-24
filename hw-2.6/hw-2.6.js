//Task 1
const arrNumber = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arrNumber.length; i++) { //можно записать так for(let i of arrNumber) {}
    console.log(arrNumber[i]);
    if (arrNumber[i] === 10) break;
}

//Task 2
const arrNumber2 = [1, 5, 4, 10, 0, 3];
console.log(`${arrNumber2.indexOf(4)}:4`);

//Task 3
const arrNumber3 = [1, 3, 5, 10, 20];
//const arrNumber3 = arrNumber3.join(' ');
console.log(arrNumber3.join(''));

//Task 4
let arr = [];
for (let i = 0; i < 3; i++) {
    let inArr = [];
    for (let j = 0; j < 3; j++) {
        inaArr.push(1);
    }
    arr.push(inaArr);
}
console.log(arr);

//Task 5
const arrNumber4 = [1, 1, 1];
arrNumber4.push(2, 2, 2);
console.log(arrNumber4);

//Task 6
const arr = [9, 8, 7, 'a', 6, 5];
let resultArr = [9, 8, 7, 'a', 6, 5].filter(item => !isNaN(item)).sort();
console.log(resultArr);

//Task 7
const arrNumber6 = [9, 8, 7, 6, 5];
let requestNumber = Number(prompt('Введи число'));
if (arrNumber6.includes(requestNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}


//Task 8
let str = 'abcdef';
let arrStr = str.split('').reverse().join('');
console.log(`'${arrStr}'`);

//Task 9
const arr = [[1, 2, 3,], [4, 5, 6]];
console.log(arr.flat());


//Task 10
let arrCreate = [7, 4, 1, 8, 5, 0, 1, 10, 3];
for (let i = 0; i < arrCreate.length - 1; i++) {
    console.log(arrCreate[i] + arrCreate[i + 1]);
}


//Task 11

function inArr((arrNumber10) => arrNumber10.map(i => i ** 2));
console.log(inArr);

//Task 12
const inArr2 = (String) => String.map(d => d.length);

//Task 13
const inArr3 = (arrNumber11) => arrNumber11.filter(i => i < 0);

//Task 14
function inArr4() {
    const arrN = [];
    for (let i = 0; i < 10; i++) {
        arrN.push(Math.floor(Math.random() * 11));
    }
    const even = arrN.filter(i => i % 2 === 0);
    console.log(`Исходный: ${arrN}`);
    console.log(`Четные: ${even}`);
}

//Task 15
let randomArray = Math.floor((Math.random() * 10)) + 1;
const getArr = (nArr) => {
    let sum = 0;
    for (let i = 0; i < 6; i+=1) { 
        sum += randomArray[i];
    }
    return sum / randomArray.length;
}
console.log(randomArray);