async function getAllPerfect(max) {
    const perfects = [];
    for (let i = 1; i <= max; i++) {
        await isPerfect(i).then(isPerfect => {
            if (isPerfect) {
                perfects.push(i);
            }
        });
    }
    return perfects;
}

function isPerfect(num) {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(num)) {
            reject(`Argument must be a number: "${num}" given`);
        }
        if (num <= 0) {
            reject(`Number must be a positive integer: ${num} given`);
        }

        const maxDiv = num / 2;
        const divisors = [];

        for (let i = 0; i <= maxDiv; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }

        const divisorsSum = divisors.reduce((value, next) => value + next, 0);


        resolve(divisorsSum === num);
    });


}

console.time("Perfect");
getAllPerfect(100000).then(i => {

    console.log(i);
    console.timeEnd("Perfect");
});
