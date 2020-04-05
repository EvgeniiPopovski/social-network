import React from "react";
import s from './Users.module.css'
import * as axios from 'axios'

const Users = (props) => {

    if (props.users.length === 0 ) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( (response) =>{
            debugger;
        props.setUsers(response.data.items)
        } );
        // props.setUsers(
        //         [
        //     {id: 1, avatarUrl: 'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png', isfollowing: false,fullname: 'Петров Иван',status: 'boss', location:{country: 'Belarus', city: 'Minsk'}},
        //     {id: 2, avatarUrl: 'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png', isfollowing: true, fullname: 'Игонь Андреев',status: 'bigboss',location:{country: 'Russias', city: 'Orel'}},
        //     {id: 3, avatarUrl: 'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png', isfollowing: false,fullname: 'Жанна Агузарова', status: 'very big boss',location:{country: 'Russias', city: 'Orel'}},
        // ]
        // )
    };

    return (
        props.users.map( u => (
            <div key={u.id}>
                <div >
                    { u.photos.small === null ?  <img className={s.image} src={'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png'} /> : <img className={s.image} src={u.photos.small}/>}
                </div>
                <div>
                    {u.isfollowing ?  <button onClick={() => (props.unfollow(u.id))}>Unfollow</button> : <button onClick={() => (props.follow(u.id))}>Follow</button>}
                </div>
                <p>{u.name}</p>
                <p>{u.status}</p>
                <p>
                    <span>{'u.location.country'}</span> <br/>
                    <span>{'u.location.city'}</span>
                </p>
            </div>
        ))
    )
};
export default Users;