import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomePage from "../../pages/HomePage";
// import Cards from "../../components/Cards";
// import hero from "./../../assets/hero.jpg";
// import LoginModal from "../../components/LoginModal";

export default function LandingPageLayout(children) {
  // function CloseModal() {
  //   setIsButtonClicked(false);
  // }

  return (
    <div>
      <HomePage />
    </div>
  );
}
