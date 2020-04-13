import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                    <div key={u.id} className={s.userWrapper}>
                        <div className={s.photoAndButton}>
                            
                            <NavLink to={'/profile/' + u.id}>
                                {u.photos.small === null ? <img className={s.image}
                                                                src={'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png'}/> :
                                    <img className={s.image} src={u.photos.small}/>}
                            </NavLink>
                            
                            <div>
                                {u.isfollowing ? <button className={s.followButton}
                                                         onClick={() => (axios.delete (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials: true, headers: {'API-KEY': 'd6c82b27-7542-428f-a89c-13e7b9f79f63'} })
                                                             .then((response) => {
                                                                 if (response.data.resultCode == 0) {
                                                                     props.unfollow(u.id)
                                                                 }
                                                             })
                                                         )}>
                                        Unfollow</button>

                                    : <button className={s.followButton}

                                            onClick={ () => {
                                                axios.post (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials: true, headers: {'API-KEY': 'd6c82b27-7542-428f-a89c-13e7b9f79f63'}})
                                                    .then((response) => {
                                                        if (response.data.resultCode == 0) {
                                                            props.follow(u.id)
                                                        }
                                                    })
                                            }}>
                                        Follow</button>}
                            </div>
                        </div>
                        <p>{u.name}</p>
                        <p>{u.status}</p>
                        <p className={s.location}>
                            <span>{'u.location.country'}</span> <br/>
                            <span>{'u.location.city'}</span>
                        </p>
                    </div>
                ))
            }
            <div className={s.spanContainer}>
                {pages.map(page => (<span onClick={(e) => (props.onPageChange(page))}
                                          className={props.currentPage === page && s.selectedPage}>{page}</span>))}
            </div>
        </div>
    );
}


export default Users;