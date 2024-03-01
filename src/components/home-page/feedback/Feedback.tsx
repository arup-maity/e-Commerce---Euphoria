"use client";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Feedback = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="new-arrival-silder">
        {itemArray?.map((item, index) => {
          return (
            <div key={index} className="px-3">
              <div className="border-2 border-[#bebcbd] space-y-3 rounded-xl p-5">
                <Image src={`${item.image}`} width={60} height={60} alt="" />
                <h6 className="text-xl font-bold text-[#3c4242]">{item.name}</h6>
                <div className="text-sm text-[#807d7e] font-lato tracking-wide">{item.contant}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Feedback;

const itemArray = [
  {
    image: "/face-1.png",
    name: "Floyd Miles",
    contant:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis."
  },
  {
    image: "/face-2.png",
    name: "Floyd Miles",
    contant:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis."
  },
  {
    image: "/face-3.png",
    name: "Floyd Miles",
    contant:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis."
  },
  {
    image: "/face-1.png",
    name: "Floyd Miles",
    contant:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis."
  },
  {
    image: "/face-2.png",
    name: "Floyd Miles",
    contant:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, animi magnam illo eligendi ducimus nobis."
  }
];
