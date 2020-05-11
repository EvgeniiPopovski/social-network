import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const getContactsInfo = (obj) => {
    let i = 0;
    let contactsArray = Object.values(obj).map(contactInfo => <span key={contactInfo || i++}>{contactInfo}</span>)
    return contactsArray
}

const ProfileInfo = (props) => {
    let answerToggle = "";
    if (props.profile !== null) {
        if (props.profile.lookingForAJob === true) {
            answerToggle = "ДА!"
        } else {
            answerToggle = "НЕТ! "
        }
    }

    return (
        <div>
            <div className={s.wrapWalper}>
                <img className={s.walper}
                     src='https://avatars.mds.yandex.net/get-pdb/921693/bb741f14-fd0f-45c7-950d-04767ead1825/s1200'
                     alt='Аватар Пользователя'/>
            </div>
            <ProfileStatusWithHooks status={props.status}  updateStatus = {props.updateStatus}/>
            <div className={s.wrapper}>
                <div className={s.avatar}>
                    {props.profile !== null ? <img src={props.profile.photos.large} alt='Аватар Пользователя'/> : null}
                </div>
                <div className={s.fullnameUser}>
                    Полное Имя: {props.profile !== null ? <span>{props.profile.fullName}</span> : null}
                </div>
                <div className={s.aboutUser}>
                     Обо мне: {props.profile !== null ? props.profile.aboutMe : null}
                </div>
                <div className={s.contactsUser}>
                    <p>Контакты в социальных сетях: {props.profile !== null 
                        ?<span>
                            {getContactsInfo(props.profile.contacts)}
                        </span>
                        : null}
                    </p>
                </div>
                <div className={s.jobLookingUser}>
                    <span>В поисках работы:<span>{answerToggle}</span> </span>
                </div>
                <p className={s.lookingForJobDescription}>
                    Интересуюсь Вакансиями: {props.profile !== null ? <span>{props.profile.lookingForAJobDescription}</span> : null}
                </p>
            </div>
        </div>

    )
};

export default ProfileInfo;
