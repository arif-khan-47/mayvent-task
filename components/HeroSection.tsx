import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function HeroSection() {
  return (
    <div className="h-screen">
      <div className="bg-[url('https://res.cloudinary.com/dgyudczza/image/upload/v1688402996/mayvent/header-bg_yzedlo.jpg')] bg-cover bg-fixed bg-no-repeat h-5/6 relative w-full">
        <div className="container m-auto h-[100%] flex">
          <div className="text-white m-auto overflow-hidden">
            <div className="lg:text-7xl text-4xl font-bold text-center lg:mb-5">
              Mayvent
            </div>
            <div className="lg:text-4xl text-center mb-5 lg:mb-10">
              Unlocking Your Workforce Potential
            </div>
            <div data-aos="zoom-in" className="mx-auto px-10 py-3 hover:scale-110 cursor-pointer hover:bg-transparent hover:border hover:border-white hover:text-white rounded-full font-bold bg-white text-black w-fit mb-10">
              Find Job
            </div>
          </div>

          <div data-aos="fade-down" className="absolute bottom-0 left-0 right-0 text-white my-3">
            <div className="text-center text-base md:text-3xl md:font-bold font-semibold mb-2 lg:block hidden">
              <h4>Browse More</h4>
            </div>
            <div className="text-center text-base md:text-3xl md:font-bold font-semibold mb-2 lg:hidden">
              <h4>Swipe Down</h4>
            </div>
            <div className="w-5 lap:w-8 mx-auto animate-bounce ">
              <BsFillArrowDownCircleFill className="text-lg md:text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
