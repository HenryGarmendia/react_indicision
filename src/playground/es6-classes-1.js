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
    constructor(name, age, major) {
        // call the parent constructor and passing the data true
        super(name, age);
        this.major = major;
    }

    has_major() {
        return !!this.major;
    }

    description() {
        // call the parent method
        let parent_description = super.description();

        if (this.has_major()) {
            parent_description += ` Their major is ${this.major}`;
        }

        return parent_description;
    }
};

const me = new Student('Henry Garmendia', 37, 'Computer Science');
console.log(me.description());

const him = new Student();
console.log(him.description());