import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 relative">
        <div className="p-4 container grid grid-cols-1 rounded-xl mx-auto sm:grid-cols-2 gap-4 relative ">
          <div className="text-white space-y-4 lg:pr-36 relative p-4">
          <div className="absolute inset-0 bg-sky-500/75 opacity-70 rounded-xl p-4 "></div>
            <h1 data-aos="fade-up" className="p-4 text-5xl font-bold">
            We crush your competitors, goals, and sales records - without the B.S.
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-orange-400 text-white hover:bg-orange-500 px-4 py-1 rounded-md duration-200"
            >
              GET FREE CONSULTATION
            </button>
          </div>
          <div></div>
        </div>
      </div>
    

      <div className="p-4 absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
