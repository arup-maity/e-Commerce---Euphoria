"use client";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const SavingZone = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className="w-full">
      <div className="grid grid-rows-2 gap-4">
        <div className="grid grid-cols-3 gap-4">
          {itemArray?.slice(0, 3)?.map((item, index) => (
            <div key={index} className="bg-cover bg-center bg-no-repeat w-full aspect-[4/3] rounded-md" style={{ backgroundImage: `url(${item.image})` }}>
              <div className={`w-full h-full flex items-center ${item.textAlign === "left" ? "justify-end" : "justify-start"} p-4`}>
                <div className="space-y-2">
                  <p className="w-24 text-3xl text-white font-lato font-medium mt-4">{item.title}</p>
                  <p className="text-sm text-white tracking-wide">{item.descrirtion}</p>
                  <p className="text-lg text-white font-medium uppercase">{item.discount}</p>
                  <div className="w-[100px] flex  justify-center pt-2 pb-5">
                    <svg stroke="currentColor" fill="white" strokeWidth="1" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z"></path>
                    </svg>
                  </div>
                  <Link href={`${item.link}`} className="text-sm text-white font-lato uppercase border border-white rounded-md py-2 px-6">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {itemArray?.slice(3, 5)?.map((item, index) => (
            <div key={index} className="bg-cover bg-center bg-no-repeat w-full aspect-[650/300] rounded-md" style={{ backgroundImage: `url(${item.image})` }}>
              <div className={`w-full h-full flex items-center ${item.textAlign === "left" ? "justify-end" : "justify-start"} p-4`}>
                <div className="space-y-2">
                  <p className="w-24 text-3xl text-white font-lato font-medium mt-4">{item.title}</p>
                  <p className="text-sm text-white tracking-wide">{item.descrirtion}</p>
                  <p className="text-lg text-white font-medium uppercase">{item.discount}</p>
                  <div className="w-[100px] flex  justify-center pt-2 pb-5">
                    <svg stroke="currentColor" fill="white" strokeWidth="1" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z"></path>
                    </svg>
                  </div>
                  <Link href={`${item.link}`} className="text-sm text-white font-lato uppercase border border-white rounded-md py-2 px-6">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Slider {...settings} className="new-arrival-silder">
        {itemArray?.map((item, index) => {
          return (
            <div key={index} className="px-3">
              <div className="bg-cover bg-center bg-no-repeat w-full aspect-square" style={{ backgroundImage: `url(${item.image})` }}></div>
              <p className="text-lg text-[#3c4242] font-lato font-medium mt-4">{item.title}</p>
            </div>
          );
        })}
      </Slider> */}
    </div>
  );
};

export default SavingZone;

const itemArray = [
  {
    image: "/save-1.png",
    title: "Hawaiian Shirts",
    descrirtion: "Dress upin summer vide",
    discount: "UPTO 50% OFF",
    link: "https://",
    textAlign: "right"
  },
  {
    image: "/save-4.png",
    title: "Hawaiian Shirts",
    descrirtion: "Dress upin summer vide",
    discount: "UPTO 50% OFF",
    link: "https://",
    textAlign: "left"
  },
  {
    image: "/save-5.png",
    title: "Hawaiian Shirts",
    descrirtion: "Dress upin summer vide",
    discount: "UPTO 50% OFF",
    link: "https://",
    textAlign: "left"
  },
  {
    image: "/save-2.png",
    title: "Hawaiian Shirts",
    descrirtion: "Dress upin summer vide",
    discount: "UPTO 50% OFF",
    link: "https://",
    textAlign: "left"
  },
  {
    image: "/save-3.png",
    title: "Hawaiian Shirts",
    descrirtion: "Dress upin summer vide",
    discount: "UPTO 50% OFF",
    link: "https://",
    textAlign: "left"
  }
];
