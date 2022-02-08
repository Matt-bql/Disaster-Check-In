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
    <div className='md:h-18 bg-header-primary-color sticky top-0 z-20 h-12 w-screen text-white '>
      <div className=' mx-2 flex h-full max-w-7xl items-center justify-between  lg:mx-4'>
        <button className=' sm:ml-4'>
          <Link to='/'>LOGO</Link>
        </button>

        <div>
          <CustomGreeting />
        </div>

        <button
          onClick={onClickHandler}
          className=' uppercase hover:text-red-600 sm:mr-5 md:hidden '
        >
          Menu
        </button>

        <nav
          className={`${!active && "hidden"}
            bg-header-primary-color absolute top-full right-0 z-20 flex
            flex-col md:static md:flex md:w-auto
          md:flex-row 
          `}
        >
          <SignoutButtonConditional />
        </nav>
      </div>
    </div>
  );
}
