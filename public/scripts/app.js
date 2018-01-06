'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app.js is running!');

var Visible = function (_React$Component) {
    _inherits(Visible, _React$Component);

    function Visible(props) {
        _classCallCheck(this, Visible);

        var _this = _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).call(this, props));

        _this.handleToggle = _this.handleToggle.bind(_this);

        _this.state = {
            render_if: false
        };

        return _this;
    }

    _createClass(Visible, [{
        key: 'handleToggle',
        value: function handleToggle() {
            var _this2 = this;

            this.setState(function () {
                var swap_state = _this2.state.render_if === false ? true : false;
                return {
                    render_if: swap_state
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggle },
                    this.state.render_if ? 'Hide details' : 'Show details'
                ),
                this.state.render_if && React.createElement(
                    'p',
                    null,
                    'Hey, you can see the text again!'
                )
            );
        }
    }]);

    return Visible;
}(React.Component);

ReactDOM.render(React.createElement(Visible, null), document.getElementById('react_container'));

/* 
    VER #2
*/

// console.log('app.js is running!');

// class Visible extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleToggle = this.handleToggle.bind(this);

//         this.state = {
//             btn: 'Show text',
//             text: ''
//         };

//     }

//     handleToggle() {
//         this.setState(() => {
//             const is_text = (this.state.text === '') ? <p>Hey, you can see the text again!</p> : '';
//             const is_btn = (this.state.btn === 'Show text') ? 'Hide text' : 'Show text';
//             return {
//                 text: is_text,
//                 btn: is_btn
//             };
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Visibility Toggle</h1>
//                 <button onClick={this.handleToggle}>{this.state.btn}</button>
//                 {this.state.text}
//             </div>
//         );
//     };
// }

// ReactDOM.render(<Visible />, document.getElementById('react_container'));

/* 
    ORIGINAL VERSION
*/

// let content = '';
// let btn_text = 'Show details';

// const toggle_change = () => {
//     if (content === '') {
//         content = <p>Hey, you can see the text now!</p>;
//         btn_text = 'Hide details';
//         render_visible();
//     } else {
//         content = '';
//         btn_text = 'Show details';
//         render_visible();
//     }
// };

// const app_root = document.getElementById('react_container');

// const render_visible = () => {
//     const output_jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle_change}>{btn_text}</button>
//             {content}
//         </div>
//     );

//     ReactDOM.render(output_jsx, app_root);
// };

// render_visible();
