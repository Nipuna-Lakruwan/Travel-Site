import React from "react";
import BlogsComp from "../components/Hotels/HotelsCard";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Discover the world with me, Nipuna, where I specialize in creating unforgettable travel experiences. My expertise will help you explore captivating destinations, from hidden gems to renowned landmarks. Whether you seek adventure, relaxation, or cultural immersion, I offer personalized advice and meticulously planned itineraries to ensure your journey is seamless and memorable. Join me, and let’s create stories worth sharing.
          </p>
          <br />
          <p>
          My passion for travel drives me to constantly explore new destinations and uncover unique experiences, ensuring that every trip I plan is exceptional. Trust me to transform your travel dreams into reality, with expert insights, local connections, and a commitment to excellence guiding you every step of the way.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
