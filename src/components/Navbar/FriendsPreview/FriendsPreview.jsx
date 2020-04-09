import React from "react";
import s from './FriendsPreview.module.css'
import {NavLink} from "react-router-dom";

const FriendsPreview = (props) => {

    return (
        <NavLink to={'/profile/'}>
            <div className={s.friendsCard}>
                <div className={s.friendMiniImage}>
                    1
                </div>
                <div className={s.friendsName}>
                    {props.name}
                </div>
            </div>
        </NavLink>
    )
}

export default FriendsPreview