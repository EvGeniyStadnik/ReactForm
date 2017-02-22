let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');

let FormApp = require('FormApp');

describe('FormApp', () => {
    it('should exist', () => {
        expect(FormApp).toExist();
    });

    it('should toggle forms: RegisterForm and SignInForm', () => {
        let formApp = TestUtils.renderIntoDocument(<FormApp/>);

        let el = ReactDOM.findDOMNode(formApp);

        let registerTab = el.querySelectorAll('ul li')[1];
        TestUtils.Simulate.click(registerTab);
        let statusRegisterTab = formApp.state.register;
        expect(statusRegisterTab).toBe(true);

        let signInTab = el.querySelectorAll('ul li')[0];
        TestUtils.Simulate.click(signInTab);
        let statusSignTab = formApp.state.signin;
        expect(statusSignTab).toBe(true);

    });
});