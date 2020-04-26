import React from "react";
import { Field, reduxForm } from 'redux-form'


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name='login' component='input' placeholder="Login" />
                </div>
                <div>
                    <Field name='password' component='input' type='password' placeholder="Password"/>
                </div>
                <div>
                    <Field name='rememberMe' component='input' type='checkbox'  /> Remember Me
                </div>
                <div>
                    <button>Log In</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'Login'
  })(LoginForm)