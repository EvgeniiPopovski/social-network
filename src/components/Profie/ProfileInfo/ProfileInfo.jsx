import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileAvatar from "./ProfileAvatar";
import {ProfileDataReduxForm} from './ProfileDataForm';


  
  


const ProfileInfo = ({ profile, isOwner, status, updateStatus, saveFile, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);
  const onSubmit= (formData) => {
    console.log(formData)
    saveProfile(formData)
    setEditMode(false)
  }

  return editMode ? (
    <ProfileDataReduxForm
      profile={profile}
      isOwner={isOwner}
      saveFile={saveFile}
      status={status}
      updateStatus={updateStatus} 
      onSubmit={onSubmit}
      initialValues={profile}
    />
  ) : (
    <ProfileData
      profile={profile}
      isOwner={isOwner}
      saveFile={saveFile}
      status={status}
      updateStatus={updateStatus}
      activateEditMode={() => setEditMode(true)}
    />
  );
};



const ProfileData = ({profile, isOwner, saveFile, status, updateStatus, activateEditMode}) => {

  let answerToggle = "НЕТ";
  if (profile !== null && profile.lookingForAJob === true) {
    answerToggle = "ДА!";
  }


  return (
    <div>
      {isOwner && <button onClick={activateEditMode}>Edit</button>}

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div className={s.wrapper}>
        <ProfileAvatar
          isOwner={isOwner}
          saveFile={saveFile}
          profile={profile}
        />
        <div className={s.fullnameUser}>
          Полное Имя:{" "}
          {profile !== null ? <span>{profile.fullName}</span> : null}
        </div>
        <div className={s.aboutUser}>
          Обо мне: {profile !== null ? profile.aboutMe : null}
        </div>
        <div className={s.contactsUser}>
          { profile && <p>
            <b>Контакты</b>{" "}
            {Object.keys(profile.contacts).map((key) => {
              return (
                <div>
                  <b>{key}:</b>
                  {profile.contacts[key]}
                </div>
              );
            })}
          </p>}
        </div>
        <div className={s.jobLookingUser}>
          <span>
            В поисках работы:<span>{answerToggle}</span>{" "}
          </span>
        </div>
        <p className={s.lookingForJobDescription}>
          Интересуюсь Вакансиями:{" "}
          {profile !== null ? (
            <span>{profile.lookingForAJobDescription}</span>
          ) : null}
        </p>
      </div>
    </div>
  );
}


export default ProfileInfo;
