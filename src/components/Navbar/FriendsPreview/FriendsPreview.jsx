import React from "react";
import s from './FriendsPreview.module.css'

const FreindsPreview = (props) => {

    return (
        <div className={s.friendsCard}>
            <div className={s.friendMiniImage}>
                1
            </div>
            <div className={s.friendsName}>
                {props.name}
            </div>
        </div>
    )
}

export default FreindsPreview