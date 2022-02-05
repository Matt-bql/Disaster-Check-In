import React from "react";
import sunset from "./../../assets/sunset.webp";

export default function Cards({ ...otherProps }) {
  return (
    <div className="flex flex-row flex-wrap justify-center py-14 ">
      <div
        className="
        
      mb-5 px-2.5 sm:w-3/4
      lg:w-2/5 xl:w-4/12"
      >
        <div className=" bg-white">
          <div>
            <a href="https://emergency.yale.edu/be-prepared/hurricane">
              <img
                src={sunset}
                className="w-full hover:opacity-60"
                alt="sunset. This links to a hurricane preparedess page."
              />
            </a>
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="text-base font-bold">
                  Hurricane Preparedness
                </span>
              </li>
              <li className="list-none">
                <span className="text-base">
                  An article with great resources and tips to assist with
                  preparing for an incoming hurricane.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="
        mb-5 w-full px-2.5 sm:w-3/4
      lg:w-2/5 xl:w-4/12"
      >
        <div className="bg-white">
          <div>
            <a href="https://www.nhc.noaa.gov/">
              <img
                src="https://content.fortune.com/wp-content/uploads/2018/09/42826055150_9b3f5ddc15_k.jpg"
                className="w-full hover:opacity-60"
                alt="sunset. This links to the national hurricane center web page."
              />
            </a>
          </div>
          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="text-base font-bold">Hurricane Tracker</span>
              </li>
              <li className="list-none">
                <span className="text-base">
                  This is the Nation Hurricane Center's web page where you can
                  view live tracking data of hurricanes.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
