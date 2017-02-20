let React = require('react');

class FormApp extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form action="">
                    <input type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

module.exports = FormApp;







