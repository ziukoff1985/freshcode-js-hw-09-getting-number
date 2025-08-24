'use strict';

function gettingNumber(target, current = 1, path = '1') {
    if (current === target) return path;

    if (current > target) return null;

    const multiply = gettingNumber(target, current * 3, `(${path} * 3)`);
    if (multiply !== null) return multiply;

    const add = gettingNumber(target, current + 5, `(${path} + 5)`);
    if (add !== null) return add;

    return null;
}

const targetNumber = 54;

!Number.isInteger(targetNumber) || targetNumber % 5 === 0
    ? console.log(`Cannot obtain number ${targetNumber} with *3 and +5`)
    : console.log(
          `Expression for ${targetNumber}: ${gettingNumber(targetNumber)}`
      );
