import React from "react";
import * as axios from "axios";
import Header from "../Header";
import {connect} from "react-redux";
import {logoutThunkCreator} from './../../../redux/AuthMeReducer'


class HeaderContainer extends React.Component{
    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        AuthMe: state.AuthMe
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => {
            dispatch(logoutThunkCreator())
        }
    })
}

export default connect (mapStateToProps,mapDispatchToProps) (HeaderContainer)