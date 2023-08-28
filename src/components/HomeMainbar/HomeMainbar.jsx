import React  from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";
import { useTranslation } from 'react-i18next';


const HomeMainbar = () => {
    // const { i18n, t } = useTranslation(["navbar"]);
    const { t } = useTranslation(["main"]);

  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);


  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>{t("topquestions")}</h1>
        ) : (
          <h1>{t("allquestions")}</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
        {t("askquestions")}
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>{t("loading")}</h1>
        ) : (
          <>
            <p>{questionsList.data.length} {t("questions")}</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;