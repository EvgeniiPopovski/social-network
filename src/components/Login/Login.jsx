import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Input } from "../common/FormControls/FormControls";
import { required } from "../../validators/validators";
import { connect } from "react-redux";
import {loginThunkCreator} from './../../redux/AuthMeReducer'
import { Redirect } from "react-router-dom";
import s from './../common/FormControls/FormControls.module.css'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.Email , formData.Password , formData.remeberMe)
        console.log(formData)
    }
    if (props.isLogged) {
        return <Redirect to='/profile'></Redirect>
    }
    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.AuthMe.isLogged
    }
}

export default connect (mapStateToProps, {loginThunkCreator}) (Login)


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {fieldConstructor('Email', Input , required , null, 'Login' , '')}
            {fieldConstructor('Password' , Input , required , 'password' , 'Password', '')}
            {fieldConstructor('rememberMe', 'input', null , 'checkbox' , null , 'Remember Me')}
            {props.error &&
                <div className={s.formError}>
                    {props.error}
                </div>
            }
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

const fieldConstructor = (fieldName, fieldComponent, fieldValidate, fieldType,fieldPlaceholder , FieldText) => {
    return (
        <div>
            <Field name={fieldName} component={fieldComponent} validate={fieldValidate} type={fieldType} placeholder={fieldPlaceholder} />
            {FieldText}
        </div>
    )
}