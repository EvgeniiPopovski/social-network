import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.wrapWalper}>
                <img className={s.walper} src='https://avatars.mds.yandex.net/get-pdb/921693/bb741f14-fd0f-45c7-950d-04767ead1825/s1200' />
            </div>
            <div className={s.wrapper}>
                <div className={s.avatar}>
                    <span>Avatar</span>
                </div>
                <div className={s.description}>
                    Description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;