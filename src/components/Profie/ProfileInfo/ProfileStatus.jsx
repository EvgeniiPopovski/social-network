import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode : false,
        status: this.props.status,
    };

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    };

    activateEditMode  ()  {
        this.setState({editMode : true});
    };
    deactivateEditMode () {
        this.setState({editMode : false});
        this.props.updateStatus (this.state.status);
    }
    statusChange  (e)  {
        this.setState({status : e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.statusChange.bind(this)} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                    </div>
                    : <div>
                        <span  onDoubleClick = {this.activateEditMode.bind(this)}> {this.props.status || "Введите статус"} </span>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus