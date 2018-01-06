"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app.js is running live!');

var IndecisionWebApp = function (_React$Component) {
    _inherits(IndecisionWebApp, _React$Component);

    function IndecisionWebApp(props) {
        _classCallCheck(this, IndecisionWebApp);

        var _this = _possibleConstructorReturn(this, (IndecisionWebApp.__proto__ || Object.getPrototypeOf(IndecisionWebApp)).call(this, props));

        _this.method_delete_options = _this.method_delete_options.bind(_this);
        _this.method_pick = _this.method_pick.bind(_this);

        _this.state = {
            options: ['First Item', 'Second Item', 'Third Item', 'Fourth Item']
        };
        return _this;
    }

    _createClass(IndecisionWebApp, [{
        key: 'method_delete_options',
        value: function method_delete_options() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'method_pick',
        value: function method_pick() {
            this.setState(function (prevState) {
                var random_num = Math.floor(Math.random() * prevState.options.length);
                var options = prevState.options[random_num];
                alert(options);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var app_title = 'Indecision Web-App';
            var app_sub_title = 'Put your life decision in the logic of a computer.';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: app_title, sub_title: app_sub_title }),
                React.createElement(Action, { has_options: this.state.options.length > 0, method_pick: this.method_pick }),
                React.createElement(Options, { options: this.state.options, method_delete_options: this.method_delete_options }),
                React.createElement(AddOptions, null)
            );
        }
    }]);

    return IndecisionWebApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.sub_title
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.method_pick, disabled: !this.props.has_options },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.method_delete_options },
                    'Remove All'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, option_text: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Options: ',
                    this.props.option_text
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
    _inherits(AddOptions, _React$Component6);

    function AddOptions() {
        _classCallCheck(this, AddOptions);

        return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
    }

    _createClass(AddOptions, [{
        key: 'method_add_options',
        value: function method_add_options(e) {
            e.preventDefault();
            console.log(e);
            var option = e.currentTarget.add_option.value.trim();

            if (option) {
                alert(option);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.method_add_options },
                    React.createElement('input', { type: 'text', name: 'add_option', placeholder: 'e.g. Learn JavaScript' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionWebApp, null), document.getElementById('react_container'));
