// array
const numbers = [1, 2, 3];
[num1, num2] = numbers;
[, , num3] = numbers;
console.log(num1, num2, num3);

/*
// object (deprecated)
const {name} = {name:'Daniel', age: 20};
console.log(name); // Daniel
console.log(age); // undefined
*/