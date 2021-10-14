import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";

export default function Header({ ...otherProps }) {
  const [active, setActive] = useState(false);
  function onClickHandler() {
    setActive(!active);
  }

  return (
    <>
      <div className='relative p-2.5 '>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='w-14'>Logo</div>
          <div
            onClick={onClickHandler}
            className={`
          md:hidden uppercase
          `}
          >
            Menu
          </div>

          <nav
            className={`${!active && "hidden"}
            absolute flex flex-col bg-white top-full w-full left-0 z-20
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

              <Link
                to='/user-page'
                className='list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
              >
                Signup/Login
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
