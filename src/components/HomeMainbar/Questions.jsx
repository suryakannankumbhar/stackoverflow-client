import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useTranslation } from 'react-i18next';



const Questions = ({ question }) => {
  const { t } = useTranslation(["main"]);
  
  
  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        
      <p>{question.upVote.length - question.downVote.length}</p>
        <p>{t("votes")}</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>{t("answers")}</p>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${question._id}`} className="question-title-link">
          {question.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className="display-time">
          {t("asked")} {moment(question.askedOn).fromNow()} {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;