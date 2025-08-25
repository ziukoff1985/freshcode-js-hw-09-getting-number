'use strict';

function gettingNumber(target) {
    if (!Number.isFinite(target)) return null;

    const roundedTarget = Math.round(target);

    if (roundedTarget <= 0 || roundedTarget % 5 === 0) {
        return null;
    }
    function findExpression(current, path) {
        if (current === roundedTarget) return path;
        if (current > roundedTarget) return null;
        return (
            findExpression(current + 5, `(${path} + 5)`) ||
            findExpression(current * 3, `(${path} * 3)`)
        );
    }
    return findExpression(1, '1');
}

const targetNumber = 62.7;

const result = gettingNumber(targetNumber);

if (result === null) {
    console.log(
        `Cannot obtain number ${Math.round(targetNumber)} with *3 and +5`
    );
} else {
    console.log(`Expression for ${Math.round(targetNumber)}: ${result}`);
}
