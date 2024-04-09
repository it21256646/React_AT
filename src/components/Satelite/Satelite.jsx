import React from "react";
import digitalImg from "../../assets/digital.png";

const Rapidscat = () => {
  return (
    <>
  <section className="bg-primary text-white py-20">
    <div className="container ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="relative p-4">
          <div className="bg-sky-500/75 p-6 border-l-4 rounded-xl border-b-4 border-l-sky-800 border-b-sky-800 ">
            
            <h1
              data-aos="fade-up p-4 "
              data-aos-delay="500"
              className="uppercase text-5xl"
            >
              Digital Strategy Consulting
            </h1>
            <p data-aos="fade-up p-4 " data-aos-delay="700">
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="p-4 bg-orange-400 text-white hover:bg-orange-500 px-4 py-1 rounded-md duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img
            src={digitalImg}
            alt=""
            className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default Rapidscat;
