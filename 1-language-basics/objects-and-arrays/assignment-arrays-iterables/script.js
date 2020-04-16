// * * * 1 : Create an array of numbers (of your choice) and perform three array operations:
const numbers = [1,2,3,56,8,1,2,99];

//filter for numbers greater than 5
const greaterThan5 = numbers.filter(number => number > 5 );
console.log(greaterThan5);

//map every number to an object which holds the number on some property (e.g. "num")
const mapToAnObj = numbers.map((num, idx) => {
    const obj = {index: idx, num: num};
    return obj;
});
console.log(mapToAnObj);

//reduce the array to a single number (the multiplication of all numbers)
const reduceArray = numbers.reduce((curResult, curValue) => curResult * curValue, 1);
console.log(reduceArray);

// * * * 2 : Write a function which executes some logic that find the largest number in a list of arguments
const findMax = (...args) => {
    let max = args.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a === b) {
            return 0;
        } else {
            return -1;
        }
    });

    return max[max.length - 1];
};

// passes the array from task 1, split up into multiple arguments to that function
console.log(findMax(...numbers));

// * * * 3 : Tweak "findMax" function such that it finds both the minimun and maximum and returns those as an array.
const findMaxMin = (...args) => {
    let max = args.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a === b) {
            return 0;
        } else {
            return -1;
        }
    });

    return max = [max[0], max[max.length - 1]];
};
console.log(findMaxMin(...numbers));

//then use destructuring when calling the function to store the two results in separate constants.
const usingDestruc = () => {
    const foo = findMaxMin(...numbers);
    const [min, max] = foo;
    console.log(min, max);
};

usingDestruc();

// * * * 4 : Create a list (and possibly some surrouding logic) where you ensure that NO duplicate values can be added
const noDups = new Set(['hey', 'YOU', 22, 22, 'nothing']);
noDups.add('pax');
noDups.add('pax');

console.log(noDups);