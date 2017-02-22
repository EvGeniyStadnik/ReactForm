const React = require('react');

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
    };

    onFormSubmit = (e) => {
        if (!this.refs.name.value || !this.refs.username.value || !this.refs.email.value || !this.refs.password.value){
            e.preventDefault();
            alert('Please fill all fields')
        }
    };

    render (){
        return (
            <div>
                <form onSubmit={this.onFormSubmit} action="http://example.org" method="post">
                    <div>
                        <input ref="name" type="text" name="new_user[name]" placeholder="You name"/>
                    </div>
                    <div>
                        <input ref="username" type="text" name="new_user[username]" placeholder="Your Username"/>
                    </div>
                    <div>
                        <input ref="email" type="email" name="new_user[email_confirmation]" placeholder="You email"/>
                    </div>
                    <div>
                        <input ref="password" type="password" name="new_user[password]" placeholder="Your password"/>
                    </div>
                    <div>
                        <button className='button expanded'>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

module.exports = RegisterForm;