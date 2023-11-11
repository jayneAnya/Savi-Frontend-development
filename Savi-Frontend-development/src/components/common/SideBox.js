import React from "react";
import "../../assets/scss/sidebox.scss";
import Logo from "../../assets/svg/Savi..svg";
import {
  DashboardIcon,
  SavingIcon,
  GroupIcon,
  Transaction,
  SettingsIcon,
  Logout,
} from "../../assets/custom";
import { useNavigate } from "react-router-dom";

import { useDisclosure } from "@chakra-ui/react";
import { LogOutModal } from "../Modals";

export const SideBox = () => {
  const dashboardDetails = [
    {
      icon: DashboardIcon,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: SavingIcon,
      text: "Goals",
      path: "/saving",
    },
    {
      icon: GroupIcon,
      text: "Groups",
      path: "/groups",
    },
    {
      icon: Transaction,
      text: "Transactions",
      path: "/transactions",
    },
    {
      icon: SettingsIcon,
      text: "Settings",
      path: "/settings",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const IsMatch = (path) => {
    return window.location.pathname.includes(path);
  };

  const navigate = useNavigate();

 

  return (
    <div className="sidebox">
      <div className="sidebox__container">
        <img src={Logo} alt="logo" className="sidebox__logo" />
        <div className="sidebox__details">
          <p className="sidebox__details--text">Overview</p>
          {dashboardDetails.slice(0, 4).map((item) => (
            <div
              className="sidebox__section"
              key={item.text}
              onClick={() => navigate(item.path)}
              style={{
                backgroundColor: IsMatch(item.path) ? "#b5179E" : "transparent",
              }}
            >
              <item.icon
                primary={IsMatch(item.path) ? "#fff" : "#a9abad"}
                secondary={IsMatch(item.path) ? "#d374c5" : "#292d32"}
              />
              <p
                className="sidebox__dash"
                style={{
                  color: IsMatch(item.path) ? "#fff" : "#000",
                  fontWeight: IsMatch(item.path) ? "bold" : "normal",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
          <p className="sidebox__details--others">Others</p>
          {dashboardDetails.slice(4).map((item) => (
            <div
              className="sidebox__section"
              key={item.text}
              onClick={() => navigate(item.path)}
              style={{
                backgroundColor: IsMatch(item.path) ? "#b5179E" : "transparent",
                color: IsMatch(item.path) ? "#fff" : "#000",
              }}
            >
              <item.icon
                primary={IsMatch(item.path) ? "#fff" : "#292d32"}
                secondary={IsMatch(item.path) ? "#d374c5" : "#a9abad"}
              />
              <p className="sidebox__dash">{item.text}</p>
            </div>
          ))}
          <div
            className="sidebox__section"
            style={{
              backgroundColor: "transparent",
              color: "#000",
            }}
            onClick={onOpen}
          >
            <Logout primary="#292d32" secondary="#a9abad" />
            <p className="sidebox__dash">Logout</p>
          </div>
        </div>
        <LogOutModal  isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
};
