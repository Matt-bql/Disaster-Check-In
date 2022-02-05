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
      <div className="font-body min-h-full bg-gray-100">
        <div className="flex h-screen flex-col ">
          <div
            className=" relative flex h-full items-center justify-center 
          bg-cover bg-fixed bg-center "
            style={{ backgroundImage: `url(${hero})` }}
          >
            {/* Look in to this. */}
            <div className="space-y-12">
              {heading && (
                <h1 className="relative z-10 px-2.5 text-center text-5xl font-semibold uppercase text-white md:text-6xl ">
                  {heading}
                </h1>
              )}
              <br />
              <div className="flex justify-center">
                <button
                  className=" text-l relative z-10 rounded border border-red-500 bg-transparent py-2 px-4 text-center text-2xl
              font-semibold uppercase text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white md:text-3xl"
                >
                  <Link to="/user-page">Check-In</Link>
                </button>
              </div>
            </div>
            {/* This is used to increase readabilty of heading. by darkening picture*/}
            <div className="absolute -top-0 -left-0 z-0 h-full w-full bg-black opacity-40" />
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl">
          <Cards />
        </div>
      </div>
    </div>
  );
}
