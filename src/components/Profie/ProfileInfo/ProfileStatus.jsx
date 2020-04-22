import React from "react";
import {NavLink} from "react-router-dom";

class ProfileStatus extends React.Component {
    constructor (props) {
        super (props);
    }
    state = {
        editMode : false,

    };
    activateEditMode  ()  {
        this.setState({editMode : true})
        console.log ('this: ' + this)
    };
    deactivateEditMode () {
        this.setState({editMode : false})
    }


    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                    : <div>
                        <span  onDoubleClick = {this.activateEditMode.bind(this)}> {this.props.status} </span>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus