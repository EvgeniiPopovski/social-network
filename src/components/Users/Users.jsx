import React from "react";
import s from './Users.module.css'
import * as axios from 'axios'


class Users extends React.Component {
    constructor(props) {
        super (props);

    }
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( (response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render () {
        return (
            this.props.users.map(u => (
                <div key={u.id} className={s.userWrapper}>
                    <div className={s.photoAndButton}>
                        <div>
                            {u.photos.small === null ? <img className={s.image}
                                                            src={'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png'}/> :
                                <img className={s.image} src={u.photos.small}/>}
                        </div>
                        <div>
                            {u.isfollowing ? <button className={s.followButton} onClick={() => (this.props.unfollow(u.id))}>Unfollow</button> :
                                <button className={s.followButton} onClick={() => (this.props.follow(u.id))}>Follow</button>}
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
        );
    }
}


//
// const Users = (props) => {
//
//     if (props.users.length === 0 ) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then( (response) =>{
//             debugger;
//         props.setUsers(response.data.items)
//         } );
//     };
//
//     return (
//         props.users.map( u => (
//             <div key={u.id}>
//                 <div >
//                     { u.photos.small === null ?  <img className={s.image} src={'https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png'} /> : <img className={s.image} src={u.photos.small}/>}
//                 </div>
//                 <div>
//                     {u.isfollowing ?  <button onClick={() => (props.unfollow(u.id))}>Unfollow</button> : <button onClick={() => (props.follow(u.id))}>Follow</button>}
//                 </div>
//                 <p>{u.name}</p>
//                 <p>{u.status}</p>
//                 <p>
//                     <span>{'u.location.country'}</span> <br/>
//                     <span>{'u.location.city'}</span>
//                 </p>
//             </div>
//         ))
//     )
// };
export default Users;