let React = require('react');

let SignInForm = require('SignInForm');
let RegisterForm = require('RegisterForm');

class FormApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            signin: true,
            register: false
        }
    }

    onStatusChange = (status) => {
        return () => {
            this.setState({
                signin: status === "signin" ? true : false,
                register: status === "register" ? true : false
            });
        }
    };

    render(){
        const {signin, register} = this.state;
        console.log(`signin: ${signin}, register: ${register}`);
        const toggleForms = () => {
            if (signin){
                return <SignInForm/>
            } else {
                return <RegisterForm/>
            }
        };
        return (
            <div className="row main-form">
                <div className="column small-centered large-4 medium-6 small-8">
                    <ul className="tabs" >
                        <li className="tabs-title" onClick={this.onStatusChange('signin')}>
                            <a href="#">Sign in</a>
                        </li>
                        <li className="tabs-title" onClick={this.onStatusChange('register')}>
                            <a href="#">Register</a>
                        </li>
                    </ul>
                    <div>
                        {toggleForms()}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = FormApp;





