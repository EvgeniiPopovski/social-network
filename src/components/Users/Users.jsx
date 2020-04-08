import React from "react";
import s from './Users.module.css'


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
                            <div>
                                {u.photos.small === null ? <img className={s.image}
                                                                src={'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png'}/> :
                                    <img className={s.image} src={u.photos.small}/>}
                            </div>
                            <div>
                                {u.isfollowing ? <button className={s.followButton}
                                                         onClick={() => (props.unfollow(u.id))}>Unfollow</button> :
                                    <button className={s.followButton}
                                            onClick={() => (props.follow(u.id))}>Follow</button>}
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