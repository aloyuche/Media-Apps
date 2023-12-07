import React from "react";
import arrayDestruct from "../asset/p9.jpg";
import installNode from "../asset/p1.jpg";
import navbar from "../asset/p6.jpg";
import reactParallax from "../asset/p4.jpg";
import reactSmooth from "../asset/p2.jpg";
import reactWeather from "../asset/p0.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b pt-8 gap-5 h-full from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl py-3 md:py-3 font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-2">Check out some of my work right here</p>
        </div>

        <div className="grid mb-5 sm:grid-cols-2 pb-19 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  START
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
