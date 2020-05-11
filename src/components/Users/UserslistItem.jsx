import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Users.module.css'

const UserLisrItem = ({userId, photos, followed, isFollowingInProgress, unFollowUserThunkCreator, followUserThunkCreator,name,status} ) => {
    return (
        <div key={userId} className={s.userWrapper}>
            <div className={s.photoAndButton}>

                <NavLink to={'/profile/' + userId}>
                    {photos.small === null
                        ? <img className={s.image}
                            alt={'Изображение пользователя'}
                            src={'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png'} />
                        : <img className={s.image}
                            src={photos.small}
                            alt={"Изображение пользователя отсутствует"} />}
                </NavLink>

                <div>
                    {followed ? <button disabled={isFollowingInProgress.some(id => id === userId)} className={s.followButton}
                        onClick={() => {
                            unFollowUserThunkCreator(userId)
                        }
                        }>Unfollow</button>

                        : <button disabled={isFollowingInProgress.some(id => id === userId)} className={s.followButton}
                            onClick={() => {
                                followUserThunkCreator(userId)
                            }
                            }>Follow</button>}
                </div>
            </div>
            <p>{name}</p>
            <p>{status}</p>
            <p className={s.location}>
                <span>{'u.location.country'}</span> <br />
                <span>{'u.location.city'}</span>
            </p>
        </div>
    )
}

export default UserLisrItem