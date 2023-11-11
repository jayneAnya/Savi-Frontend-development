import React from "react";
import { HeaderNav, SideBox } from ".";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div
      className="layout"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <SideBox />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <HeaderNav />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: "100%",
            overflow: "auto",
            backgroundColor: "#f9fafb",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
