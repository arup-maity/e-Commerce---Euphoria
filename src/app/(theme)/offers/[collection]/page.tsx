'use client'
import MultiRangeSlider from "@/components/ui/range";
import Image from "next/image";
import { useState } from "react";
const Collection = () => {
   const [sidebarCollapse, setSidebarCollapse] = useState({
      priceToggle: true,
      colorToggle: true,
   })
   const [priceRange, setPriceRange] = useState({
      minPrice: 2,
      maxPrice: 50
   })
   return (
      <div className="w-full theme-container">
         <div className="flex flex-nowrap">
            <div className="w-3/12">

               <div className="p-4">
                  <p className="relative text-xl font-medium after:absolute after:w-20 after:h-0.5 after:bg-[#8A33FD] after:left-0 after:bottom-0 pb-1 mb-4">Product Category</p>
                  <ul className="space-y-1.5 *:text-gray-500">
                     <li className="text-base font-lato">Printed T-shirts</li>
                     <li className="text-base font-lato">Payjamas</li>
                     <li className="text-base font-lato">Full sleeve T-shirts</li>
                     <li className="text-base font-lato">Joggers</li>
                     <li className="text-base font-lato">Plain T-shirts</li>
                     <li className="text-base font-lato">Boxers</li>
                     <li className="text-base font-lato">Printed T-shirts</li>
                  </ul>
               </div>
               <div className="p-4">
                  <div className="">
                     <div className="relative text-xl font-medium after:absolute after:w-20 after:h-0.5 after:bg-[#8A33FD] after:left-0 after:bottom-0 pb-1" onClick={() => setSidebarCollapse((prev) => ({ ...prev, priceToggle: !prev.priceToggle }))}>Price</div>
                  </div>
                  <div className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out ${sidebarCollapse.priceToggle ? 'grid-rows-[1fr]' : ''}`}>
                     <div className="overflow-hidden">
                        <MultiRangeSlider
                           min={0}
                           max={150}
                           minValue={40}
                           maxValue={100}
                           step={1}
                           onInput={(e) => {
                              console.log('min', e.minValue);
                              console.log('max', e.maxValue);
                              setPriceRange((prev) => ({ ...prev, minPrice: e.minValue, maxPrice: e.maxValue }))
                           }}
                        />
                        <div className="flex flex-nowrap space-x-5">
                           <div className="w-6/12 text-base text-gray-500 font-lato flex justify-center border rounded-md py-1">${priceRange.minPrice}</div>
                           <div className="w-6/12 text-base text-gray-500 font-lato flex justify-center border rounded-md py-1">${priceRange.maxPrice}</div>
                        </div>
                        <div className="text-sm text-indigo-500 font-lato my-2">Reset</div>
                     </div>
                  </div>
               </div>
               <div className="p-4">
                  <div className="">
                     <div className="relative text-xl font-medium after:absolute after:w-20 after:h-0.5 after:bg-[#8A33FD] after:left-0 after:bottom-0 pb-1" onClick={() => setSidebarCollapse((prev) => ({ ...prev, colorToggle: !prev.colorToggle }))}>Color</div>
                  </div>
                  <div className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out ${sidebarCollapse.colorToggle ? 'grid-rows-[1fr]' : ''}`}>
                     <div className="overflow-hidden">
                        <ul className="flex flex-wrap p-2 py-4">
                           <li className="w-3/12 flex flex-col text-center py-2">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="relative mx-auto w-10 h-10 after:absolute after:w-[34px] after:h-[34px] after:left-[3px] after:-top-[3px] after:border-2 after:border-transparent peer-checked:after:border-violet-500 after:rounded cursor-pointer">

                                 <span className="w-7 h-7 bg-black inline-block rounded"></span>
                              </label>
                              <p className="text-sm text-gray-400">Perpal</p>
                           </li>
                           <li className="w-3/12 flex flex-col text-center py-2">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="relative mx-auto w-10 h-10 after:absolute after:w-[34px] after:h-[34px] after:left-[3px] after:-top-[3px] after:border-2 after:border-transparent peer-checked:after:border-violet-500 after:rounded cursor-pointer">

                                 <span className="w-7 h-7 bg-black inline-block rounded"></span>
                              </label>
                              <p className="text-sm text-gray-400">Perpal</p>
                           </li>
                           <li className="w-3/12 flex flex-col text-center py-2">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="relative mx-auto w-10 h-10 after:absolute after:w-[34px] after:h-[34px] after:left-[3px] after:-top-[3px] after:border-2 after:border-transparent peer-checked:after:border-violet-500 after:rounded cursor-pointer">

                                 <span className="w-7 h-7 bg-black inline-block rounded"></span>
                              </label>
                              <p className="text-sm text-gray-400">Perpal</p>
                           </li>
                           <li className="w-3/12 flex flex-col text-center py-2">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="relative mx-auto w-10 h-10 after:absolute after:w-[34px] after:h-[34px] after:left-[3px] after:-top-[3px] after:border-2 after:border-transparent peer-checked:after:border-violet-500 after:rounded cursor-pointer">

                                 <span className="w-7 h-7 bg-black inline-block rounded"></span>
                              </label>
                              <p className="text-sm text-gray-400">Perpal</p>
                           </li>
                           <li className="w-3/12 flex flex-col text-center py-2">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="relative mx-auto w-10 h-10 after:absolute after:w-[34px] after:h-[34px] after:left-[3px] after:-top-[3px] after:border-2 after:border-transparent peer-checked:after:border-violet-500 after:rounded cursor-pointer">

                                 <span className="w-7 h-7 bg-black inline-block rounded"></span>
                              </label>
                              <p className="text-sm text-gray-400">Perpal</p>
                           </li>
                           <li className="w-3/12 flex flex-col text-center py-2">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="relative mx-auto w-10 h-10 after:absolute after:w-[34px] after:h-[34px] after:left-[3px] after:-top-[3px] after:border-2 after:border-transparent peer-checked:after:border-violet-500 after:rounded cursor-pointer">

                                 <span className="w-7 h-7 bg-black inline-block rounded"></span>
                              </label>
                              <p className="text-sm text-gray-400">Perpal</p>
                           </li>
                        </ul>
                        <div className="text-sm text-indigo-500 font-lato my-2">Reset</div>
                     </div>
                  </div>
               </div>
               <div className="p-4">
                  <div className="">
                     <div className="relative text-xl font-medium after:absolute after:w-20 after:h-0.5 after:bg-[#8A33FD] after:left-0 after:bottom-0 pb-1" onClick={() => setSidebarCollapse((prev) => ({ ...prev, colorToggle: !prev.colorToggle }))}>Size</div>
                  </div>
                  <div className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out ${sidebarCollapse.colorToggle ? 'grid-rows-[1fr]' : ''}`}>
                     <div className="overflow-hidden">
                        <ul className="flex flex-wrap py-4">
                           <li className="basis-3/12 flex flex-col text-center p-1">
                              <input type="checkbox" name="" id="ss1" className="peer hidden" />
                              <label htmlFor="ss1" className="text-gray-500 border border-gray-300 peer-checked:border-indigo-500 peer-checked:text-indigo-500 rounded-md py-0.5">
                                 <span className="text-sm font-lato">XXS</span>
                              </label>
                           </li>
                           <li className="basis-3/12 flex flex-col text-center p-1">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="border rounded-md py-0.5">
                                 <span className="text-sm text-gray-500 font-lato">XS</span>
                              </label>
                           </li>
                           <li className="basis-3/12 flex flex-col text-center p-1">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="border rounded-md py-0.5">
                                 <span className="text-sm text-gray-500 font-lato">S</span>
                              </label>
                           </li>
                           <li className="basis-3/12 flex flex-col text-center p-1">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="border rounded-md py-0.5">
                                 <span className="text-sm text-gray-500 font-lato">M</span>
                              </label>
                           </li>
                           <li className="basis-3/12 flex flex-col text-center p-1">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="border rounded-md py-0.5">
                                 <span className="text-sm text-gray-500 font-lato">L</span>
                              </label>
                           </li>
                           <li className="basis-3/12 flex flex-col text-center p-1">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="border rounded-md py-0.5">
                                 <span className="text-sm text-gray-500 font-lato">XL</span>
                              </label>
                           </li>
                           <li className="basis-3/12 flex flex-col text-center p-1">
                              <input type="checkbox" name="" id="s1" className="peer hidden" />
                              <label htmlFor="s1" className="border rounded-md py-0.5">
                                 <span className="text-sm text-gray-500 font-lato">XXL</span>
                              </label>
                           </li>
                        </ul>
                        <div className="text-sm text-indigo-500 font-lato my-2">Reset</div>
                     </div>
                  </div>
               </div>


            </div>
            <div className="w-9/12">
               <div className="flex flex-wrap">
                  {productList?.map((product, i) => (
                     <div key={i} className="w-full md:w-6/12 lg:w-4/12 p-3">
                        <div className="aspect-[250/300] rounded-lg overflow-hidden">
                           <Image src={product.image} width={250} height={300} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-nowrap justify-between mt-4">
                           <div className="">
                              <h1 className="text-base text-[#3c4242] font-lato font-bold">{product.title}</h1>
                              <p className="text-sm text-[#807d7e] font-lato">{product.brand}</p>
                           </div>
                           <div className="">
                              <div className="text-base text-[#3c4242] font-bold font-lato bg-gray-100 py-2 px-4 rounded">{product.price}</div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="">
            <div className="text-2xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-5">Clothing for Women Online in India</div>
            <div className="">
               <p className="text-lg text-[#807D7E] font-lato font-bold mb-6">Reexplore Women's Clothing Collection Online at Euphoria</p>
               <p className="text-base text-[#807D7E] font-lato mb-5">Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India? Well, your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel, Euphoria has closet of Women Collection covered with the latest and best designs of Women's Clothing Online.</p>
               <p className="text-base text-[#807D7E] font-lato mb-5">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. </p>
               <p className="text-lg text-[#807D7E] font-lato font-bold mb-6">One-Stop Destination to Shop Every Clothing for Women: Euphoria</p>
               <p className="text-base text-[#807D7E] font-lato mb-4">Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is a comfortable outfit. Concerning this, Euphoria has a big fat range of Stylish Women's Clothing that would make her the winner wherever she goes. </p>
               <p className="text-base text-[#807D7E] font-lato mb-4">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women comprising the premium material and elegant design that you are always seeking for. Basically, </p>
               <div className="text-base text-[#807D7E] font-lato font-bold">See More</div>
            </div>
         </div>

      </div>
   );
};

export default Collection;

const productList = [
   {
      image: "/img-28.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-15.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-27.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-16.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-26.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-17.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-28.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-15.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-27.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-16.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-26.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   },
   {
      image: "/img-17.png",
      title: "Black Sweatshift with Black",
      price: "$19.99",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quibusdam, quod, quibusdam.",
      brand: "Jhanvi's Brand"
   }
];
