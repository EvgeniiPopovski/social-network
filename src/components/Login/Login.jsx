import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Input } from "../common/FormControls/FormControls";
import { required } from "../../validators/validators";


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
                    <Field name='login' component={Input} validate={required} placeholder="Login" />
                </div>
                <div>
                    <Field name='password' component={Input} validate={required} type='password' placeholder="Password"/>
                </div>
                <div>
                    <Field name='rememberMe' component="input" type='checkbox'  /> Remember Me
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