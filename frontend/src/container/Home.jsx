import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Portfolio from "../asset/uc.jpg";
import { Link } from "react-scroll";
// import Auth from "./Auth";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full mt-4 bg-gradient-to-b from-black via-black to-gray-800"
    >
      {/* <Auth /> */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            I am a fullStack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 4 years experience in wweb development and 6 years in system
            support and analysis, Currently I love to work on web using ReactJs,
            NextJs, Tailwind, MongoDb and Sanity
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit py-3 px-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio <MdOutlineKeyboardArrowRight />
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Portfolio}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
