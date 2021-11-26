import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomGreeting from "./../CustomGreeting";
import SignoutButtonConditional from "./../../components/CustomGreeting/SignoutButtonConditional";
export default function Header() {
  const [active, setActive] = useState(false);
  function onClickHandler() {
    setActive(!active);
  }

  return (
    <>
      <div className='z-10 md:h-16 relative p-2.5 text-white bg-header-primary-color'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='w-14'>Logo</div>
          <CustomGreeting />
          <div
            onClick={onClickHandler}
            className={`
          md:hidden uppercase
          `}
          >
            Menu
          </div>
          {/* <AmplifyGreetings></AmplifyGreetings> */}
          <nav
            className={`${!active && "hidden"}
            absolute flex flex-col bg-header-primary-color top-full w-full left-0 z-20
          md:static md:w-auto md:flex-row md:flex 
          `}
          >
            <ul className='md:flex-row md:flex content-around'>
              <Link
                to='/feedback'
                className='list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
              >
                feedback
              </Link>

              <Link
                to='/'
                className='list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
              >
                Home
              </Link>

              <Link
                to='/About'
                className='list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
              >
                About
              </Link>
              <SignoutButtonConditional />
              {/* <Link
                to='/user-page'
                className='list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
              >
                Signup/Login
              </Link> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
