const React = require('react');
let AgAutocomplete = require('react-algoliasearch').default;

class SignInForm extends React.Component{
    constructor(props){
        super(props);
    }

    onFormSubmit = (e) => {
        if (!this.refs.name.search[0].value || !this.refs.usermessage.value || !this.refs.password.value){
            e.preventDefault();
            alert('Please fill all fields')
        }

    };

    render (){
        return (
            <div>
                <form onSubmit={this.onFormSubmit} action="http://example.org" method="post">
                    <div>
                        <AgAutocomplete
                            apiKey={"c9d74d1b249831a64803caffb37a4e40"}
                            appId={"X4CZOFIPYI"}
                            displayKey="name"
                            indices={[{index: 'ideals-people-energy'}]}
                            inputId="input-search"
                            placeholder="Your name (algolia search)"
                            ref="name"
                        />
                    </div>
                    <div>
                        <input ref="password" type="password" name="user_password" placeholder="Your password"/>
                    </div>
                    <div>
                        <textarea ref="usermessage" name="user_message" placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button className='button expanded'>Sign in</button>
                    </div>
                </form>
            </div>
        )
    }
}

module.exports = SignInForm;