import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import "./Auth.css";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation(["auth"]);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert(t("enteremailandpassword"));
    }
    if (isSignup) {
      if (!name) {
        alert(t("enteraname"));
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="auth-section">
      {/* {isSignup && <AboutAuth />} */}
      <div className="auth-container-2">
        <img src={icon} alt="stack overflow" className="login-logo" />
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>{t("name")}</h4>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>{t("email")}</h4>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>{t("password")}</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  {t('forgotpassword')}
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button type="submit" className="auth-btn">
            {isSignup ? t("signup") : t("login")}
          </button>
        </form>
        <p>
          {isSignup ? t("alreadyacc") : t("noacc")}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? t("login") : t("signup")}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;