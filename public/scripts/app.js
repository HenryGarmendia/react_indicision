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
        _this.method_add_options = _this.method_add_options.bind(_this);
        _this.method_delete_option = _this.method_delete_option.bind(_this);

        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionWebApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // do nothing at all
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: 'method_delete_options',
        value: function method_delete_options() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'method_delete_option',
        value: function method_delete_option(option_to_remove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option_to_remove !== option;
                    })
                };
            });
        }
    }, {
        key: 'method_pick',
        value: function method_pick() {
            var random_num = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[random_num];
            alert(option);
        }
    }, {
        key: 'method_add_options',
        value: function method_add_options(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exist';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var app_sub_title = 'Put your life decision in the logic of a computer.';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { sub_title: app_sub_title }),
                React.createElement(Action, { has_options: this.state.options.length > 0, method_pick: this.method_pick }),
                React.createElement(Options, {
                    options: this.state.options,
                    method_delete_options: this.method_delete_options,
                    method_delete_option: this.method_delete_option
                }),
                React.createElement(AddOptions, { method_add_options: this.method_add_options })
            );
        }
    }]);

    return IndecisionWebApp;
}(React.Component);

IndecisionWebApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.app_title
        ),
        props.sub_title && React.createElement(
            'p',
            null,
            props.sub_title
        )
    );
};

Header.defaultProps = {
    app_title: 'Indecision Web-App'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.method_pick, disabled: !props.has_options },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.method_delete_options },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, option_text: option, method_delete_option: props.method_delete_option });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option_text,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.method_delete_option(props.option_text);
                }
            },
            'Remove'
        )
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.method_add_options = _this2.method_add_options.bind(_this2);

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'method_add_options',
        value: function method_add_options(e) {
            e.preventDefault();
            var option = e.currentTarget.add_option.value.trim();
            var error = this.props.method_add_options(option);

            this.setState(function () {
                return { error: error };
            });
            if (!error) {
                e.target.elements.add_option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
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
