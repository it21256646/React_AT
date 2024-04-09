import React from "react";
import mobileImg from "../../assets/mobile.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={mobileImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="relative p-4">
          <div className="bg-sky-500/75 p-6 border-l-4 rounded-xl border-b-4 border-l-sky-800 border-b-sky-800 ">
            
            <h1
              data-aos="fade-up p-4 "
              data-aos-delay="500"
              className="uppercase text-5xl"
            >
              Web & Mobile App Development
            </h1>
            <p data-aos="fade-up p-4 " data-aos-delay="700">
            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
