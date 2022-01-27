// Hooks
import React from "react";
// Components
import Cards from "../../components/Cards";
//Libraries
import { Link } from "react-router-dom";
// Assets
import hero from "./../../assets/hero.webp";

export default function HomePage() {
  const heading = "When Disasters Happen...";

  return (
    <div>
      <div className='min-h-full bg-gray-100 font-body'>
        <div className='h-screen flex flex-col '>
          <div
            className=' relative flex items-center justify-center h-full 
          bg-cover bg-center bg-fixed '
            style={{ backgroundImage: `url(${hero})` }}
          >
            {/* Look in to this. */}
            <div className='space-y-12'>
              {heading && (
                <h1 className='relative px-2.5 text-white uppercase z-10 text-5xl font-semibold text-center md:text-6xl '>
                  {heading}
                </h1>
              )}
              <br />
              <div className='flex justify-center'>
                <button
                  className=' bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded
              relative uppercase z-10 text-l text-center md:text-3xl text-2xl'
                >
                  <Link to='/user-page'>Check-In</Link>
                </button>
              </div>
            </div>
            {/* This is used to increase readabilty of heading. by darkening picture*/}
            <div className='z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40' />
          </div>
        </div>
        <div className='w-full max-w-7xl mx-auto'>
          <Cards />
        </div>
      </div>
    </div>
  );
}
