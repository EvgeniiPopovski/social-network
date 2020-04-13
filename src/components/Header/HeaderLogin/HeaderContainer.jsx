import React from "react";
import * as axios from "axios";
import {setAuthME} from "../../../redux/AuthMeReducer";
import Header from "../Header";
import {connect} from "react-redux";


class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthME(response.data)
                }
            })
    }
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
        setAuthME: (userData) => {
            dispatch(setAuthME(userData))
        }
    })
}

export default connect (mapStateToProps,mapDispatchToProps) (HeaderContainer)