"use client";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLayoutEffect, useState } from "react";
import { productInstance } from "@/config/axios";

const ForWomen = () => {
   var settings = {
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      draggable: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
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

   const [productList, setProductList] = useState([])
   useLayoutEffect(() => {
      getProduct()
   })
   async function getProduct() {
      try {
         const responce = await productInstance.get(`/product-by-category`)
         if (responce.data.success) {
            setProductList(responce.data.productByCategory)
         }
         console.log('Product retrieved successfully', responce.data)
      } catch (error) {
         console.log(error.message);
      }
   }

   if (productList.length === 0) {
      return (
         <div className="w-full">
            <Slider {...settings} className="new-arrival-silder -mx-4">
               {Array(5).fill(null).map((item, index) => {
                  return (
                     <div key={index} className="px-4 mb-10">
                        <div className="w-full bg-slate-100 animate-pulse aspect-[250/350] rounded-lg"></div>
                        <p className="w-full h-5 bg-slate-50 animate-pulse rounded-lg mt-2"></p>
                        <p className="w-full h-4 bg-slate-50 animate-pulse rounded-lg mt-2"></p>
                     </div>
                  );
               })}
            </Slider>
         </div>
      )
   }

   return (
      <div className="w-full">
         <Slider {...settings} className="new-arrival-silder -mx-4">
            {productList?.map((item, index) => {
               return (
                  <div key={index} className="px-4 mb-10">
                     <div className="bg-cover bg-center bg-no-repeat w-full aspect-[250/350] rounded-lg" style={{ backgroundImage: `url(${item.product.thumbnail?.url})` }}></div>
                     <p className="text-lg text-[#3c4242] font-lato font-medium line-clamp-1 mt-2">{item?.product?.title}</p>
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
