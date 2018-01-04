/* 
    An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. 
*/ 
// if is an arrow function and only returns one expression you can do in one line e.g. const square = (x) =>  x * x;
const square = (x) => {
    return x * x;
}

console.log(square(9));

// normal arrow function
const get_first_name = (full_name) => {
    return full_name.split(' ')[0];
};
console.log(get_first_name('Henry Garmendia'));

// shorthand arrow function
const get_first_name2 = (full_name) => full_name.split(' ')[0];
console.log(get_first_name2('Henry Garmendia'));

// arguments object - no longer bound with arrow functions
// The arguments object is an Array-like object corresponding to the arguments passed to a function.
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(10, 1));

// this keyword - no longer bound

