import React from "react";
import { Outlet } from "react-router-dom";
import QuestsNavBar from "../../components/userComponents/QuestsNavBar";
import Footer from "../../components/visitorComponents/Footer";

export default function DashbaordLayout() {
  return (
    <div>
      <QuestsNavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
