import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {followUser, unfollowUser} from "../../API/API";

const Users = (props) => {
debugger;
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
                                {u.followed ? <button  disabled={props.isFollowingInProgress} className={s.followButton}
                                                      onClick={() => {
                                                          props.toggleFollowingProgress(true)
                                                          unfollowUser(u.id)
                                                              .then(data => {
                                                                  if (data.resultCode == 0) {
                                                                      props.unfollow(u.id)
                                                                  }
                                                                  props.toggleFollowingProgress(false)
                                                              })


                                                      }
                                                      }>Unfollow</button>

                                    : <button disabled={props.isFollowingInProgress} className={s.followButton}
                                              onClick={() => {
                                                  props.toggleFollowingProgress(true)
                                                      followUser(u.id)
                                                      .then(data => {
                                                          if (data.resultCode == 0) {
                                                              props.follow(u.id)
                                                          }
                                                          props.toggleFollowingProgress(false)
                                                      })

                                              }
                                              }>Follow</button>}
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
};


export default Users;