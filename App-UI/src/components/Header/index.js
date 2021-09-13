import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ ...otherProps }) {
  const [active, setActive] = useState(false);
  function onClickHandler() {
    setActive(!active);
  }

  return (
    <>
      <div className='  relative p-2.5 font-mono'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='w-14'>Logo</div>
          <div
            onClick={onClickHandler}
            className={`
          md:hidden uppercase
          `}
          >
            {" "}
            Menu
          </div>

          <nav
            className={`${!active && "hidden"}
          absolute flex flex-col bg-white top-full w-full left-0 z-20
          md:static md:w-auto md:flex-row md:flex
          `}
          >
            <ul className='md:flex-row md:flex'>
              <li className='list-none md:mr-5'>
                <Link
                  to='/feedback-form'
                  className='flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
                >
                  feedback
                </Link>
              </li>
              <li className='list-none md:mr-5'>
                <Link
                  to='/'
                  className='flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
                >
                  Home
                </Link>
              </li>

              <li lassName='list-none md:mr-5'>
                <Link
                  to='/about-page'
                  className='flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
                >
                  About
                </Link>
              </li>

              <li lassName='list-none md:mr-5'>
                <Link
                  to='register-login-form'
                  className='flex w-full text-base uppercase hover:text-red-600 cursor-pointer
                pt-2.5 px-2.5'
                >
                  Register/Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
