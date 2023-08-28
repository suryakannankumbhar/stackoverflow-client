import React from 'react'
import "./LeftSidebar.css"
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import { useTranslation } from 'react-i18next';

const LeftSideBar = () => {
  const {  t } = useTranslation(["leftcontainer"]);
  return (
   <div className="left-sidebar">
    <nav className='side-nav'>
    <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>{t("home")}</p>
          </NavLink>
          <div className="side-nav-div">
            <div>
            <p>{t("public")}</p>
              </div>
              <NavLink to="/Questions" className="side-nav-links" activeclassname="active" >
              <img src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}> {t("questions")} </p>
              </NavLink>
              <NavLink to="/Tags" className="side-nav-links" activeclassname="active" style={{ paddingLeft: "40px" }}>
              <p>{t("tags")}</p>
            </NavLink>
            <NavLink to="/Users" className="side-nav-links" activeclassname="active" style={{ paddingLeft: "40px" }}>
              <p>{t("users")}</p>
            </NavLink>
            
          </div>
    </nav>
   </div>
  )
}

export default LeftSideBar