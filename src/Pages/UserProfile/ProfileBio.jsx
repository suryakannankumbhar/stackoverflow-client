import React from "react";
import { useTranslation } from 'react-i18next';

const ProfileBio = ({ currentProfile }) => {
  const { t } = useTranslation(["profile"]);
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>{t("tagswatched")}</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p>{t("0tagswatched")}</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>{t("about")}</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>{t("nobiofound")}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;