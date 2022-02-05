// Hooks
import React, { useState } from "react";
// Components
import CustomGreeting from "../CustomGreeting";
import SignoutButtonConditional from "../CustomGreeting/SignoutButtonConditional";
// Libraries
import { Link } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState(false);
  function onClickHandler() {
    setActive(!active);
  }

  return (
    <div className="md:h-18 sticky top-0 z-20 h-12 w-screen bg-header-primary-color p-2.5 text-white ">
      <div className="mx-2 flex max-w-7xl items-center justify-between">
        <button className=" sm:ml-4">
          <Link to="/">LOGO</Link>
        </button>
        <CustomGreeting />
        <button>
          <div onClick={onClickHandler} className="uppercase sm:mr-5 md:hidden">
            Menu
          </div>
        </button>
        <nav
          className={`${!active && "hidden"}
            absolute top-full right-0 z-20 flex flex-col
            bg-header-primary-color md:static md:flex md:w-auto
          md:flex-row 
          `}
        >
          <SignoutButtonConditional />
        </nav>
      </div>
    </div>
  );
}
