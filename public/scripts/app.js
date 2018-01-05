'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('es6-classes-1.js is working');

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'greetings',
        value: function greetings() {
            return 'Hello. I am \uD83D\uDE0E ' + this.name + '!';
        }
    }, {
        key: 'description',
        value: function description() {
            return '\uD83D\uDE0E ' + this.name + ' is ' + this.age + ' year(s) \uD83D\uDC74.';
        }
    }]);

    return Person;
}();

;

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));
        // call the parent constructor and passing the data true


        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'has_major',
        value: function has_major() {
            return !!this.major;
        }
    }, {
        key: 'description',
        value: function description() {
            // call the parent method
            var parent_description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'description', this).call(this);

            if (this.has_major()) {
                parent_description += ' Their major is ' + this.major + ' \uD83D\uDC68\u200D\uD83C\uDF93';
            }

            return parent_description;
        }
    }]);

    return Student;
}(Person);

;

var Traveller = function (_Person2) {
    _inherits(Traveller, _Person2);

    function Traveller(name, age, location) {
        _classCallCheck(this, Traveller);

        var _this2 = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, age));

        _this2.location = location;
        return _this2;
    }

    // has_location() {
    //     return !!this.location;
    // }

    _createClass(Traveller, [{
        key: 'greetings',
        value: function greetings() {
            var parent_greetings = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'greetings', this).call(this);

            if (this.location) {
                parent_greetings += ' I am from ' + this.location + ' \u26F5';
            }

            return parent_greetings;
        }
    }]);

    return Traveller;
}(Person);

;

var me = new Traveller('Henry Garmendia', 37, 'San Francisco');
console.log(me.greetings());

var him = new Student();
console.log(him.greetings());
