import React, { useState } from "react";
// import { Link, Route } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import hero from "./../../assets/hero.jpg";
import SignupModal from "../SignupModal";

export default function LandingPageLayout({ heading, ...otherProps }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  function CloseModal() {
    setIsButtonClicked(false);
  }

  console.log(isButtonClicked);
  return (
    <div className='min-h-full bg-gray-100 font-body'>
      <div className='h-screen flex flex-col'>
        <Header />

        <div
          className=' relative flex items-center justify-center h-full 
          bg-cover bg-center bg-fixed bg-no-repeat'
          style={{ backgroundImage: `url(${hero})` }}
        >
          {/* Look in to this. */}
          <div>
            {heading && (
              <h1 className='relative px-2.5 text-white uppercase z-10 text-4xl text-center md:text-6xl '>
                {heading}
              </h1>
            )}
            <br />
            <div className='flex justify-center'>
              <button
                onClick={() => setIsButtonClicked(true)}
                className=' bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded
              relative uppercase z-10 text-l text-center md:text-3xl '
              >
                Check-In
              </button>
              {isButtonClicked ? (
                <SignupModal
                  isOpen={isButtonClicked}
                  onRequestClose={CloseModal}
                  shouldCloseOnOverlayClick={true}
                />
              ) : null}
            </div>
          </div>
          {/* This is used to increase readabilty of heading. */}
          <div className='z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40' />
        </div>
      </div>
      <div className='w-full max-w-7xl mx-auto'>{otherProps.children}</div>
      <Footer />
    </div>
  );
}
LandingPageLayout.defaultProps = { heading: "" };
