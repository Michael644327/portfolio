import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom";

export default function BaseLayout() {

  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="main-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
