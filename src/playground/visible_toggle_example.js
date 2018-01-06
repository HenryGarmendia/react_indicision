console.log('app.js is running!');

class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            render_if: false
        };

    }

    handleToggle() {
        this.setState(() => {
            const swap_state = (this.state.render_if === false) ? true : false;
            return {
                render_if: swap_state
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{(this.state.render_if) ? 'Hide details' : 'Show details'}</button>
                {this.state.render_if && <p>Hey, you can see the text again!</p>}
            </div>
        );
    };
}

ReactDOM.render(<Visible />, document.getElementById('react_container'));

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
//         this.setState((prevState) => {
//             const is_text = (prevState.text === '') ? <p>Hey, you can see the text again!</p> : '';
//             const is_btn = (prevState.btn === 'Show text') ? 'Hide text' : 'Show text';
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