"use client";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./new-arrival.scss";

const NewArrival = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="new-arrival-silder">
        {itemArray?.map((item, index) => {
          return (
            <div key={index} className="px-3">
              <div className="bg-cover bg-center bg-no-repeat w-full aspect-square" style={{ backgroundImage: `url(${item.image})` }}></div>
              <p className="text-lg text-[#3c4242] font-lato font-medium mt-4">{item.title}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default NewArrival;

const itemArray = [
  {
    image: "/nw-1.png",
    title: "Knitted Joggers"
  },
  {
    image: "/nw-2.png",
    title: "Full Sleeve"
  },
  {
    image: "/nw-3.png",
    title: "Active T-shirts"
  },
  {
    image: "/nw-4.png",
    title: "Urban Shirts"
  },
  {
    image: "/nw-1.png",
    title: "Priented T-Shirt"
  },
  {
    image: "/nw-2.png",
    title: "Hoodies % Sweetshirt"
  }
];
