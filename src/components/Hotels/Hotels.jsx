import React from "react";
import HotelCard from "./HotelCard";
import Img1 from "../../assets/hotels/hotel1.jpg";
import Img2 from "../../assets/hotels/hotel1.jpg";
import Img3 from "../../assets/hotels/hotel1.jpg";
import Img4 from "../../assets/hotels/hotel1.jpg";
import Img5 from "../../assets/hotels/hotel1.jpg";
import Img6 from "../../assets/hotels/hotel1.jpg";

const HotelsData = [
  {
    img: Img1,
    title: "Luxury Hotel",
    location: "City Name",
    description: "Description of the luxury hotel.",
    price: 500,
    type: "Luxury",
  },
  {
    img: Img2,
    title: "Business Hotel",
    location: "City Name",
    description: "Description of the business hotel.",
    price: 400,
    type: "Business",
  },
  {
    img: Img3,
    title: "Budget Hotel",
    location: "City Name",
    description: "Description of the budget hotel.",
    price: 300,
    type: "Budget",
  },
  {
    img: Img4,
    title: "Resort",
    location: "City Name",
    description: "Description of the resort.",
    price: 600,
    type: "Resort",
  },
  {
    img: Img5,
    title: "Boutique Hotel",
    location: "City Name",
    description: "Description of the boutique hotel.",
    price: 450,
    type: "Boutique",
  },
  {
    img: Img6,
    title: "Beachfront Hotel",
    location: "City Name",
    description: "Description of the beachfront hotel.",
    price: 700,
    type: "Beachfront",
  },
];

const Hotels = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Hotels to Stay
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {HotelsData.map((item, index) => (
              <HotelCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Hotels;
