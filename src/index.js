'use strict';

function gettingNumber(target, current = 1, path = '1') {
    // Базовий випадок: досягли цільового числа
    if (current === target) return path;

    // Якщо перевищили ціль - повертаємо null
    if (current > target) return null;

    // Спробувати множення на 3
    const multiply = gettingNumber(target, current * 3, `(${path} * 3)`);
    if (multiply !== null) return multiply;

    // Спробувати додавання 5
    const add = gettingNumber(target, current + 5, `(${path} + 5)`);
    if (add !== null) return add;

    // Якщо жоден шлях не працює
    return null;
}

const targetNumber = 27;

console.log(`Getting number ${targetNumber}: ${gettingNumber(targetNumber)}`);

console.log('===========================================');
