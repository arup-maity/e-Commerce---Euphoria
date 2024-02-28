"use client";
import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {BannerData.map((banner, index) => {
          return (
            <div key={index}>
              <div style={{ backgroundImage: `url("/banner-2.jpg")` }} className="aspect-[21/10] bg-cover bg-center bg-no-repeat w-full">
                <div className="w-[80%] mx-auto flex h-full">
                  <div className="w-6/12 flex items-center h-full">
                    <div className="space-y-5">
                      <p className="text-base text-white">{banner.title1}</p>
                      <h6 className="w-[70%] text-6xl font-medium text-white tracking-wide">{banner.title}</h6>
                      <p className="text-base text-white">{banner.description}</p>
                      <div>
                        <Link href="/" className="bg-white inline-block text-base text-[#3c4242] py-3 px-16 rounded-lg">
                          {banner.button}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-6/12">{/* <Image src={banner.image} width={700} height={700} alt="" className="w-auto h-full" /> */}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;

const BannerData = [
  {
    id: 1,
    title1: "T-Shirt / Tops",
    image: "/banner-2.jpg",
    title: "Summer Value Pack",
    description: "cool / colorful / comfy",
    button: "Shop Now"
  },
  {
    id: 1,
    title1: "T-Shirt / Tops",
    image: "/banner-2.jpg",
    title: "Summer Value Pack",
    description: "cool / colorful / comfy",
    button: "Shop Now"
  }
];
