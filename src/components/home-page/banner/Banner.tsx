"use client";
import React, { useLayoutEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";

import './banner.scss'
import { axiosInstance } from "@/config/axios";

const Banner = () => {

   const [bannerList, setBannerList] = useState([])

   var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };

   useLayoutEffect(() => {
      getBannerList()
   }, [])

   async function getBannerList() {
      try {
         // const { data } = await axiosInstance.get(`/banner/all-banners`)
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banner/all-banners`)
         const re = await res.json()
         console.log(re)
         setBannerList(re.banners)
      } catch (error) {
         console.log('Failed to get banner list', error);
      }
   }

   return (
      <div className="w-full overflow-hidden">
         <Slider {...settings} className="banner-slider">
            {bannerList?.map((banner, index) => {
               return (
                  <div key={index}>
                     <Link href='/'>
                        <div style={{ backgroundImage: `url(${banner?.image?.url})` }} className="aspect-[20/9] bg-cover bg-center bg-no-repeat w-full"></div>
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
