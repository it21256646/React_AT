import React from "react";
import { FaReact } from "react-icons/fa";


const ServiceData = [
  {
    title: "WEB DEVELOPMENT",
    description:
    "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "DIGITAL STRATEGY CONSULTING",
    description:
      "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "SEO",
    description:
      "Be found on Google and Bing by potential clients looking to pay for your services and products. Don't waste time with agencies promising just ranking but no sales.We help users find your site and make a decision about whether they should visit your site through a search engine.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "700",
  },

  {
    title: "SEO",
    description:
      "Build a highly skilled off-shore team for greater flexibility, more resources and to eliminate admin work at half the cost. we give you all the guidance you need to everything perfectly.Join with us to get your job done perfectly",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "700",
  },
];
const HeroCard = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className="p-4 grid grid-cols-1 sm:grid-cols-4 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="p-4 min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-violet-900/80 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
      
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCard;
