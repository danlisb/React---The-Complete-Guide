const numbers = [1, 2, 3];
const subArray = [numbers, 4]; // [[1, 2, 3], 4]
const newNumbers = [...numbers, 4]; // [1, 2, 3, 4]

console.log(subArray);
console.log(newNumbers); // spread operator (...)

const person = {
    name: 'Daniel'
};

const newPerson = {
    ...person, // name: 'Daniel'
    age: 20
};

console.log(newPerson); // spread operator (...)

// rest operator
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(2, 1, 4));