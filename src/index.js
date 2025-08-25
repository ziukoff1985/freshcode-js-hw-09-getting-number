'use strict';

function gettingNumber(target) {
    if (!Number.isInteger(target) || target <= 0 || target % 5 === 0) {
        return null;
    }
    function findExpression(current, path) {
        if (current === target) return path;
        if (current > target) return null;
        return (
            findExpression(current + 5, `(${path} + 5)`) ||
            findExpression(current * 3, `(${path} * 3)`)
        );
    }
    return findExpression(1, '1');
}

const targetNumber = 62;

const result = gettingNumber(targetNumber);

if (result === null) {
    console.log(`Cannot obtain number ${targetNumber} with *3 and +5`);
} else {
    console.log(`Expression for ${targetNumber}: ${result}`);
}
