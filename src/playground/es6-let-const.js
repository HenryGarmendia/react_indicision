// ES5 the thing of the pass
var nameVar = 'Henry';
nameVar = 'Alejandro';
console.log('nameVar', nameVar);

// ES6 can't redefine the "let" variable, you can reassign.
/* 
    The let statement declares a block scope local variable, optionally initializing it to a value. 
*/
let nameLet = 'Jane';
nameLet = 'Julie';
console.log('nameLet', nameLet);

/* 
    Constants are block-scoped, much like variables defined using the let statement. 
    The value of a constant cannot change through re-assignment, and it can't be redeclare. 
*/
const nameConst = 'Garmendia';
console.log('nameConst', nameConst);

// e.g.
function get_animal() {
    const animal_name = 'Bear';

    return animal_name;
};

const animal_name = get_animal(); // but if we assign this function call to a variable it will work
console.log(animal_name); // variable not accessible

// var variable are functions scope  
const full_name = 'Henry Garmendia';
let first_name;

if (full_name) {
    first_name = full_name.split(' ')[0];
    console.log('first_name', first_name);
}

console.log('first_name', first_name);