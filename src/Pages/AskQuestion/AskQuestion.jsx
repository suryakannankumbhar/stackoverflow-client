import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import "./AskQuestion.css";
import { askQuestion } from "../../actions/questions";

const AskQuestion = () => {
  const { t } = useTranslation(["askquestion"]);

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
            },
            navigate
          )
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>{t("askapublicquestion")}</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>{t("title")}</h4>
              <p>
              {t("bespecific")}
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder={t("isthereanrfunction")}
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>{t("body")}</h4>
              <p>
              {t("includealltheinfo")}
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>{t("tags")}</h4>
              <p>{t("addupto5tags")}</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder={t("typescriptwordpress")}
              />
            </label>
          </div>
          <input
            type="submit"
            value={t("submityourquestion")}
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;