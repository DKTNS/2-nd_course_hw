function randFruit() {
    let arrFruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrFruit = arrFruit.sort(() => Math.random() - 0.5);
    alert(arrFruit);
    let firstFruit = prompt('Чему равнялся первый элемент массива?');
    let endFruit = prompt('Чему равнялся последний элемент массива?');
    if (firstFruit === arrFruit[0] && endFruit === arrFruit[arrFruit.length - 1]) {
        alert('Поздравляем, угадали оба элемента.');
    } else if (firstFruit === arrFruit[0] || endFruit === arrFruit[arrFruit.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Не угадали ни одного элемента.');
    }
};