import React from "react";
import s from './Users.module.css'

import UserLisrItem from './UserslistItem'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.usersPerPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                props.users.map(u => (
                   <UserLisrItem 
                    key={u.id}
                    userId={u.id} 
                    photos={u.photos} followed={u.followed} 
                    isFollowingInProgress={props.isFollowingInProgress}
                    followUserThunkCreator={props.followUserThunkCreator} 
                    unFollowUserThunkCreator={props.unFollowUserThunkCreator}
                    name={u.name} 
                    status = {u.status}/>
                ))
            }
            <div className={s.spanContainer}>
                {pages.map(page => (<span onClick={(e) => (props.onPageChange(page))}
                    className={props.currentPage === page && s.selectedPage}>{page}</span>))}
            </div>
        </div>
    );
};


export default Users;