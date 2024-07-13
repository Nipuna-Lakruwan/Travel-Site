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
          Discover the world with us at BCI Campus, where we specialize in curating unforgettable travel experiences. Our expert team is dedicated to helping you explore the most captivating destinations, from hidden gems to renowned landmarks. Whether you're seeking adventure, relaxation, or cultural immersion, we provide personalized advice and meticulously planned itineraries to ensure your journey is seamless and memorable. Join us, and let's create stories worth sharing.
          </p>
          <br />
          <p>
          Our passion for travel drives us to constantly explore new destinations and uncover unique experiences, ensuring that every trip we plan is exceptional. Trust us to transform your travel dreams into reality, with expert insights, local connections, and a commitment to excellence guiding you every step of the way.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
