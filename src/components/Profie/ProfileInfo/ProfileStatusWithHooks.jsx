import React, {useState, useEffect} from "react";


const ProfileStatusWithHooks = (props) => {

    let [editMode , setEditMode] = useState(false);
    let [status , setStatus] = useState(props.status);
    
    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
         setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus (status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    
    return (
        <div>
            {editMode
                ? <div>
                    <input onBlur={deactivateEditMode} 
                            autoFocus={true} 
                            onChange={onStatusChange}
                            value={status}/>
                </div>
                : <div>
                    <span onDoubleClick = {activateEditMode}>  {props.status || "Введите "} </span>
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks