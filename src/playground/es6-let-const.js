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