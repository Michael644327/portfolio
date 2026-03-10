import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom";

export default function BaseLayout() {

  return (
    <>
      <div className="app-container">
        <Navbar />
        <main>
        <div className="main-container">
          <Outlet />
        </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
