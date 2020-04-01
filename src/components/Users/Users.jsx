import React from "react";
import s from './Users.module.css'


const Users = (props) => {

    return (
        props.users.map( u => (
            <div key={u.id}>
                <div>
                    <img src={u.avatarUrl} />
                </div>
                <div>
                    {u.isfollowing ?  <button onClick={() => (props.unfollow(u.id))}>Unfollow</button> :
                                        <button onClick={() => (props.follow(u.id))}>Follow</button>
                    }

                </div>
                <p>{u.fullname}</p>
                <p>{u.status}</p>
                <p>
                    <span>{u.location.country}</span>
                    <span>{u.location.city}</span>
                </p>
            </div>
        ))
    )
};
export default Users;