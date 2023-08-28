import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProfile } from "../../actions/users";
import { useTranslation } from 'react-i18next';



const EditProfileForm = ({ currentUser, setSwitch }) => {
  const { t } = useTranslation(["profile"]);

  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updates={}
    if (name!==currentUser.result.name) {
      updates.name=name;
    }
    if (about!==currentUser.result.about) {
      updates.about=about;
    }
    if (tags!==currentUser.result.tags) {
      updates.tags=tags
    }
    const profile=JSON.parse(localStorage.getItem('Profile'))
   const updatedProfile ={...profile,result:{...profile.result,...updates}}
   localStorage.setItem('Profile', JSON.stringify(updatedProfile));
   if (updates.tags) {
    const tagArray = tagInput.split(" ");
  updates.tags = tagArray;
   }
   console.log(updatedProfile)
      dispatch(updateProfile(currentUser?.result?._id, updates));
    setSwitch(false);
  };

  return (
    <div>
      <h1 className="edit-profile-title">{t("edityourprofile")}</h1>
      <h2 className="edit-profile-title-2">{t("publicinformation")}</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>{t("displayname")}</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>{t("aboutme")}</h3>
          <textarea
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>{t("watchedtags")}</h3>
          <p>{t("addtagsseparatedby1space")}</p>
          <input
            type="text"
            id="tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value={t("saveprofile")} className="user-submit-btn" />
        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}
        >
          {t("cancel")}
        </button>
      </form>
    </div>
  )
  
}

export default EditProfileForm

