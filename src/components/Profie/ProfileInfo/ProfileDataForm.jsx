import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileAvatar from "./ProfileAvatar";
import s from "./ProfileInfo.module.css";
import {fieldConstructor} from './../../Login/Login'
import { reduxForm } from "redux-form";
import {Input , TextArea} from './../../common/FormControls/FormControls'
import { required } from './../../../validators/validators';

export const ProfileDataForm = ({
  profile,
  isOwner,
  saveFile,
  status,
  updateStatus,
  handleSubmit,
  initialValues
}) => {
  return (
    <div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div className={s.wrapper}>
        <ProfileAvatar
          isOwner={isOwner}
          saveFile={saveFile}
          profile={profile}
        />
        <div>
          <form onSubmit={handleSubmit} initialValues>
            <button>Save</button>
            <div className={s.fullnameUser}>
              Полное Имя:{" "}
              {fieldConstructor(
                "fullName",
                Input,
                required,
                "text",
                "Input your fullname"
              )}
            </div>
            <div className={s.aboutUser}>
              Обо мне:{" "}
              {fieldConstructor(
                "aboutMe",
                TextArea,
                null,
                "textarea",
                "About Me"
              )}
            </div>

            <div className={s.jobLookingUser}>
              <span>
                В поисках работы:{" "}
                {fieldConstructor(
                  "lookingForAJob",
                  "input",
                  null,
                  "checkbox",
                  null
                )}
              </span>
            </div>
            <p className={s.lookingForJobDescription}>
              Интересуюсь Вакансиями:{" "}
              {fieldConstructor(
                "lookingForAJobDescription",
                TextArea,
                null,
                "textarea",
                "describe you perfect job"
              )}
            </p>
            <div className={s.contactsUser}>
              <p>
                <b>Контакты </b>
                {Object.keys(profile.contacts).map((key) => {
                  return (
                    <div>
                      <b>{key}:</b>{" "}
                      {fieldConstructor(
                        "contacts."+key,
                        Input,
                        null,
                        "text",
                        `Input your ${key} ref`
                      )}
                    </div>
                  );
                })}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export const ProfileDataReduxForm = reduxForm({
    form: 'ProfileDataForm'
})(ProfileDataForm)