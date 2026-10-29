import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function MainLayout() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;