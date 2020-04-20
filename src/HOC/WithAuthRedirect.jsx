import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStatetoPropsRedirect = (state) => {
    return {
        isLogged: state.AuthMe.isLogged
    }
};

export const withAuthRedirect = (Component) => {

        class RedirectComponent extends React.Component{
            render () {
                if (!this.props.isLogged) {return <Redirect to={'/login'}/>}
                return <Component {...this.props}/>
            }
        }


        let ConnectedAuthRedirectComponent = connect (mapStatetoPropsRedirect) (RedirectComponent);
        return ConnectedAuthRedirectComponent;
};