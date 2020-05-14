import React from "react";
import UserLisrItem from './UserslistItem'
import Paginator from "../common/Utilities/Paginator";

const Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.usersPerPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator  onPageChange={props.onPageChange} 
                        totalItemsCount={props.totalUsersCount} 
                        currentPage={props.currentPage}
                        itemsPerPage={props.usersPerPage}
                        />
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
        </div>
    );
};


export default Users;