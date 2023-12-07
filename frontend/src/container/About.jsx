import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-8 h-full pb-12 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-2">
          <p className="text-4xl text-orange-400 font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-base text-justify w-full flex-cols-2 sm:flex-cols-3 py-8 px-12 sm:px-0">
          <h1 className ="text-2xl font-bold text-orange-200">UNDERSTANDING HOW YOUR BRAIN WORKS IS VERY IMPORTANT</h1>
          We are service provider assisting to achieve their dreams. At CheloyTec we help understand your "WHY".
          What is your extent of living without impacting lives.We aim at taking millions of people out of poverty.
      
        <br /> 
 
          Unless you change how you think there will be a limit of how much you earn.
          CheloyTec, specialized in business development, system analysis, financial coach, and health advisor.
          A million dollar in your pocket  may not make you happy, so you gonna learn to be happy with yourself.
        </p>
      </div>
    </div>
  );
};

export default About;
