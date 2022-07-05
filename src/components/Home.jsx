import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-blue ">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-500">Hi, my name is</p>
        <h1 className="text-4xl sm: text-7xl font-bold text-[#8892b0]">Oscar Hernandez</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I am a full stack developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[600px]">I am a full stack web developer</p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items center hover:bg-red-900 hover:border-green-900">
          View Work 
           <span className="group-hover:rotate-90 duration-300">
           <HiArrowNarrowRight className="ml-3" />
           </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
