import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import FriendsPreview from "./FriendsPreview/FriendsPreview";

const Navbar = (props) => {

    let friendsListPreviw = props.friends.map( (friend) => (<FriendsPreview name={friend.name} id={friend.id}/>))

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink exact to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink exact to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink exact  to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink exact to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink exact to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>

            <div className={s.friendListPreview}>
                <p> Friends </p>
                {friendsListPreviw}
            </div>
        </nav>
    )
}

export default Navbar;