import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader";

const ProfileAvatar = ({ profile, isOwner, saveFile }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onAvatarPhotoSelect = (e) => {
    if (e.target.files.length) {
        saveFile(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={s.avatar + " " + s.photo}>
        <img
          src={profile.photos.large ||"https://i.kym-cdn.com/photos/images/facebook/000/215/813/d57.png"}
          alt="Аватар Пользователя"
        />
      </div>
      {isOwner && <input type="file" onChange={onAvatarPhotoSelect}/>}
    </div>
  );
};
export default ProfileAvatar;
