import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import silverBadge from '../../assets/award-silver.png'
import goldBadge from '../../assets/award-gold.png'
import diamondBadge from '../../assets/award-diamond.png'
import { useTranslation } from 'react-i18next';
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";
import { getLoginInfo } from "../../api";

const UserProfile = ({ slideIn, handleSlideIn }) => {
  const { t } = useTranslation(["profile"]);
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const [loginHistory, setLoginHistory] = useState(null);
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem('Profile'))?.result
  
  const award = currentProfile && {
    silver: currentProfile?.points >= 15,
    gold: currentProfile?.points >= 30,
    diamond: currentProfile?.points >= 50
  }
  const disabledAwardStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    
  }
  const awardStyle = {
    backgroundColor: 'transparent'
  }
  useEffect(() => {
    if (loggedInUser) {
      if (loggedInUser._id === id) {
        getLoginInfo(id).then(loginHistory => setLoginHistory(loginHistory.data.loginInfo)).catch(err => console.error(err));
      }
    }
    // eslint-disable-next-line
  }, [id])
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="20px"
                borderRadius={'100%'}
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>{t("points")}: {currentProfile && currentProfile.points}</p>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> {t("joined")}{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>

            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} /> {t("editprofile")}
              </button>
            )}

          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
          {
            currentProfile && <div className="badge-container-wrap">
            <h1>{t("badges")}</h1>
            <div className="badge-container">
              <div className="badge-card">
                <div className="image-container">
                  <div style={award.silver ? awardStyle : disabledAwardStyle}></div>
                  <img src={silverBadge} alt="silver badge" />
                </div>
                <p>{award.silver?t("accquired"):t("15points")}</p>
              </div>
              <div className="badge-card">
                <div className="image-container">
                  <div style={award.gold ? awardStyle : disabledAwardStyle}></div>
                  <img src={goldBadge} alt="gold badge" />
                </div>
                <p>{award.gold?t("accquired"):t("30points")}</p>
              </div>
              <div className="badge-card">
                <div className="image-container">
                  <div style={award.diamond ? awardStyle : disabledAwardStyle}></div>
                  <img src={diamondBadge} alt="diamond badge" />
                </div>
                <p>{award.diamond?t("accquired"):t("50points")}</p>
              </div>
            </div>
            <div>
              <h4>{t("howtoearnpoints")}</h4>
              <ul>
                <li>{t("get10points")} </li>
                <li>{t("ifanyuserupvoteyourquestionyouget2points")}</li>
              </ul>
            </div>
          </div>
          }
  
        </section>
      </div>
    </div>
  );
};

export default UserProfile;