console.log('es6-classes-1.js is working');

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        return `Hello. I am ${this.name}!`;
    }

    description() {
        return `😎 ${this.name} is ${this.age} year(s) 👴.`
    }
};

class Student extends Person {

};

const me = new Student('Henry Garmendia', 37);
console.log(me.description());

const him = new Student();
console.log(him.description());