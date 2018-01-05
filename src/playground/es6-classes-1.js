console.log('es6-classes-1.js is working');

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        return `Hello. I am 😎 ${this.name}!`;
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
            parent_description += ` Their major is ${this.major} 👨‍🎓`;
        }

        return parent_description;
    }
};

class Traveller extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }

    // has_location() {
    //     return !!this.location;
    // }

    greetings() {
        let parent_greetings = super.greetings();
        
        if (this.location) {
            parent_greetings += ` I am from ${this.location} ⛵`;
        }

        return parent_greetings;
    }
};

const me = new Traveller('Henry Garmendia', 37, 'San Francisco');
console.log(me.greetings());

const him = new Student();
console.log(him.greetings());