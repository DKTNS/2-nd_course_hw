function monthNumber() {
    let enterMonth = Number(prompt('Enter month number'));
    if (enterMonth === 12 || enterMonth === 1 || enterMonth === 2) {
        return alert('Зима');
    }
    else if (enterMonth === 3 || enterMonth === 4 || enterMonth === 5) {
        return alert('Весна');
    }
    else if (enterMonth === 6 || enterMonth === 7 || enterMonth === 8) {
        return alert('Лето');
    }
    else if (enterMonth === 9 || enterMonth === 10 || enterMonth === 11) {
        return alert('Осень');
    }
    else {
        return alert('Некорректный номер месяца');
    }
}