import React from "react";
import { Outlet } from "react-router-dom";
import QuestsNavBar from "../components/QuestsNavBar";
import Footer from "../components/Footer";

export default function DashbaordLayout() {
  return (
    <div>
      <QuestsNavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
