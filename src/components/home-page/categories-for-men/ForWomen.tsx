"use client";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ForWomen = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: false
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="new-arrival-silder -mx-4">
        {itemArray?.map((item, index) => {
          return (
            <div key={index} className="px-4 mb-10">
              <div className="bg-cover bg-center bg-no-repeat w-full aspect-[250/350] rounded-lg" style={{ backgroundImage: `url(${item.image})` }}></div>
              <p className="text-lg text-[#3c4242] font-lato font-medium mt-2">{item.title}</p>
              <p className="text-xs text-[#7F7F7F] font-lato font-medium mt-1">{item.description}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ForWomen;

const itemArray = [
  {
    image: "/img-15.png",
    title: "Knitted Joggers",
    description: "Explore Now!"
  },
  {
    image: "/img-16.png",
    title: "Active T-shirts",
    description: "Explore Now!"
  },
  {
    image: "/img-17.png",
    title: "Priented T-Shirt",
    description: "Explore Now!"
  },
  {
    image: "/img-18.png",
    title: "Knitted Joggers",
    description: "Explore Now!"
  },
  {
    image: "/img-15.png",
    title: "Knitted Joggers",
    description: "Explore Now!"
  },
  {
    image: "/img-16.png",
    title: "Active T-shirts",
    description: "Explore Now!"
  },
  {
    image: "/img-17.png",
    title: "Priented T-Shirt",
    description: "Explore Now!"
  },
  {
    image: "/img-18.png",
    title: "Knitted Joggers",
    description: "Explore Now!"
  }
];
