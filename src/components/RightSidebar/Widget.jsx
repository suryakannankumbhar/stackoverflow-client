import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";
import { useTranslation } from 'react-i18next';



const Widget = () => {
  const { t } = useTranslation(["rightcontainer"]);

  return (
    <div className="widget">
      <h4>{t("theoverflowblog")}</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            {t("observabilityiskeytothefutureofsoftware(andyourdevopscareer)")}
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>{t("podcast374:howvaluableisyourscreenname?")}</p>
        </div>
      </div>
      <h4>{t("featuredonmeta")}</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>{t("reviewqueueworkflows-finalrelease")}</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
            {t("pleasewelcomevaluedassociates")}
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18" />
          <p>
            {t("outdatedanswersacceptedanswerisnowunpinnedonstackoverflow")}
          </p>
        </div>
      </div>
      <h4>{t("hotmetaposts")}</h4>
      <div className="right-sidebar-div-1">

        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
            {t("whatisthebestcourseofactionwhenauserhashighenoughrepto")}
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>{t("isalinktothe'howtoask'helppageausefulcomment?")}</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;