"use client";
import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";

import './banner.scss'

const Banner = () => {
   var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };
   return (
      <div className="w-full overflow-hidden">
         <Slider {...settings} className="banner-slider">
            {BannerData.map((banner, index) => {
               return (
                  <div key={index}>
                     <Link href='/'>
                        <div style={{ backgroundImage: `url("/banner-3.jpg")` }} className="aspect-[20/9] bg-cover bg-center bg-no-repeat w-full"></div>
                     </Link>
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
