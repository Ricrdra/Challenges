function getAllPerfect(max) {
    /*Return all lower numbers than max which are perfects*/

    //Check if is a valid number
    if (!Number.isInteger(max)) {
        console.error(`Argument must be a number: "${max}" given`);
    }
    if (max <= 0) {
        console.error(`Number must be a positive integer: ${max} given`);
    }


    const perfects = [];
    for (let i = 1; i <= max; i++) {
        if (isPerfect(i)) {
            perfects.push(i);
        }
    }
    return perfects;
}

function isPerfect(num) {
    /*Check if a number is perfect*/

    //Max possible divisor of a number is always the half of the number.
    // So, we get half to stop checking once we reach it.
    const maxDiv = num / 2;
    const divisors = [];
    for (let i = 0; i <= maxDiv; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    const divisorsSum = divisors.reduce((value, next) => value + next, 0);
    return (divisorsSum === num);
}

console.time("Perfect");
console.log(getAllPerfect(1000000));
console.timeEnd("Perfect");
