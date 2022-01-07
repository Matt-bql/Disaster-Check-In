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
    <div className='z-20 h-12 w-screen md:h-18 sticky top-0 p-2.5 text-white bg-header-primary-color '>
      <div className='max-w-7xl mx-2 flex items-center justify-between'>
        <button className=' sm:ml-4'>
          <Link to='/'>LOGO</Link>
        </button>
        <CustomGreeting />
        <button>
          <div onClick={onClickHandler} className='md:hidden uppercase sm:mr-5'>
            Menu
          </div>
        </button>
        <nav
          className={`${!active && "hidden"}
            flex flex-col absolute top-full right-0 z-20
            md:static md:w-auto md:flex-row md:flex
          bg-header-primary-color 
          `}
        >
          <SignoutButtonConditional />
        </nav>
      </div>
    </div>
  );
}
