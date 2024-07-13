import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/destination-1.png";
import Img2 from "../../assets/places/destination-4.png";
import Img3 from "../../assets/places/destination-3.png";
import Img4 from "../../assets/places/destination-2.png";
import Img5 from "../../assets/places/destination-5.png";
import Img6 from "../../assets/places/destination-9.png";

const PlacesData = [
  {
    img: Img1,
    title: "Sigiriya",
    location: "Dambulla",
    description: "Sigiriya, often hailed as the Eighth Wonder of the World, is a stunning historical and archaeological site in Sri Lanka. It’s renowned for the Sigiriya Lion Rock, an ancient rock fortress that rises nearly 200 meters above the surrounding landscape.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Temple of Tooth",
    location: "Kandy",
    description:
      "Kandy, the heart of Sri Lanka’s hill country, is a city of rich history and cultural splendor. It’s the second-largest city in the country and a UNESCO World Heritage Site, known for the Temple of the Sacred Tooth Relic which houses a tooth of the Buddha.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Yala National Park",
    location: "Thissamaharama",
    description:
      "Yala National Park, in southeastern Sri Lanka, is famed for its high leopard density. Covering 979 square kilometers, it features diverse ecosystems such as forests, grasslands, and wetlands, and hosts elephants, sloth bears, crocodiles, and numerous bird species, making it a prime wildlife destination.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Ella",
    location: "Badulla",
    description: "Ella, a charming town in Sri Lanka's central highlands, is renowned for its stunning scenery and relaxed atmosphere. Known for attractions like Ella Rock, Nine Arches Bridge, and Diyaluma Falls, it offers breathtaking views, lush tea plantations, and rich biodiversity, making it a popular spot for hiking and nature enthusiasts.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Mihintale",
    location: "Anuradhapura",
    description:
      "Mihintale, a sacred mountain in Sri Lanka, is considered the cradle of Buddhism in the country. Renowned for its ancient stupas, rock inscriptions, and temples, it offers visitors a glimpse into Sri Lanka's rich religious history and stunning panoramic views of the surrounding landscape.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Mirissa",
    location: "Matara",
    description:
      "Mirissa is a coastal gem in southern Sri Lanka, famous for its beaches and whale watching. It's perfect for a relaxing beach getaway or thrilling marine adventures.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
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

export default Places;
