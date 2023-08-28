import React from "react";
import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";
import { useTranslation } from 'react-i18next';

const Users = () => {
  const { t } = useTranslation(["tags"]);

  return (
    <div className="home-container-1">
      <LeftSidebar  />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>{t("users")}</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;