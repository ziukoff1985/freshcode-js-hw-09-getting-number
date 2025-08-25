'use strict';

function gettingNumber(target, current = 1, path = '1') {
    if (current === target) return path;

    if (current > target) return null;

    const addResult = gettingNumber(target, current + 5, `(${path} + 5)`);
    if (addResult !== null) return addResult;

    const multiplyResult = gettingNumber(target, current * 3, `(${path} * 3)`);
    if (multiplyResult !== null) return multiplyResult;

    return null;
}

const targetNumber = 64;

if (
    !Number.isInteger(targetNumber) ||
    targetNumber <= 0 ||
    targetNumber % 5 === 0
) {
    console.log(`Cannot obtain number ${targetNumber} with *3 and +5`);
} else {
    console.log(
        `Expression for ${targetNumber}: ${gettingNumber(targetNumber)}`
    );
}
