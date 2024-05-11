import ForWomen from "@/components/home-page/categories-for-men/ForWomen";
import ProductImage from "@/page-components/product/ProductImage";
import { productInstance } from "@/config/axios";


async function getProduct(id: String) {
   try {
      const { data } = await productInstance.get(`/read-product/${id}`);
      return data?.product
   } catch (error) {
      console.log('first error', error);
      return null;
   }
}

const ProductName = async ({ params }) => {
   const id = params.productSlug
   const product = await getProduct(id)
   // console.log('product==>', product)

   return (
      <div className="w-full theme-container">
         <div className="w-full">
            <div className="my-2">
               <ul className="flex flex-wrap items-center space-x-2 *:text-sm *:text-gray-500 *:font-lato">
                  <li>Home</li>
                  <li>/</li>
                  <li>Product</li>
                  <li>/</li>
                  <li>{product?.title}</li>
               </ul>
            </div>
            <div className="flex flex-wrap -m-4">
               <div className="w-full lg:w-6/12 p-4">
                  <ProductImage gallery={product?.gallery} thumbnail={product?.thumbnail} />
               </div>
               <div className="w-full lg:w-6/12 p-4">
                  <div className="w-full">
                     <h2 className="text-2xl text-[#3C4242] font-lato font-medium mb-3">
                        {product?.title}
                     </h2>

                     <ul className="flex flex-nowrap items-center gap-6 *:text-[#807D7E] mb-5">
                        <li className="flex flex-nowrap items-center gap-1 text-sm font-lato">
                           <svg
                              width="16"
                              height="16"
                              viewBox="0 0 22 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
                                 fill="#EDD146"
                              />
                           </svg>
                           <span>{product?.rating}</span>
                           <span>({product?.ratingCount} ratings)</span>
                        </li>
                        <li className="flex flex-nowrap items-center gap-1 text-sm font-lato">
                           <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              version="1.1"
                              viewBox="0 0 17 17"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g />
                              <path d="M15.5 0h-14c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h0.5v4.102l4.688-4.102h8.812c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM16 11.5c0 0.275-0.224 0.5-0.5 0.5h-9.188l-3.312 2.898v-2.898h-1.5c-0.276 0-0.5-0.225-0.5-0.5v-10c0-0.275 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.225 0.5 0.5v10zM3 3h11v1h-11v-1zM3 5h11v1h-11v-1zM3 7h6v1h-6v-1z" />
                           </svg>
                           <span>{product?.review} review</span>
                        </li>
                     </ul>

                     <div className="text-3xl font-bold font-lato text-black mb-4">${product?.price?.price}<span className="text-base text-gray-400 ms-3"><del>${product?.price?.regularPrice}</del></span></div>

                     <div dangerouslySetInnerHTML={{ __html: `${product?.shortDescription}` }} className="text-base text-[#807D7E] font-lato font-normal mb-5"></div>

                     {/* <div className="mb-4">
                        <div className="text-base text-[#3F4646] font-lato mb-1">
                           Color
                        </div>
                        <ul className="flex flex-wrap gap-2 items-center">
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="color-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="color-1"
                                 className="relative inline-flex justify-center items-center w-8 h-8 border-2 border-transparent peer-checked:border-[#000] rounded-full cursor-pointer"
                              >
                                 <span className="inline-flex w-6 h-6 bg-[#000] rounded-full" />
                              </label>
                           </li>
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="color-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="color-1"
                                 className="relative inline-flex justify-center items-center w-8 h-8 border-2 border-transparent peer-checked:border-[#000] rounded-full cursor-pointer"
                              >
                                 <span className="inline-flex w-6 h-6 bg-[#000] rounded-full" />
                              </label>
                           </li>
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="color-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="color-1"
                                 className="relative inline-flex justify-center items-center w-8 h-8 border-2 border-transparent peer-checked:border-[#000] rounded-full cursor-pointer"
                              >
                                 <span className="inline-flex w-6 h-6 bg-[#000] rounded-full" />
                              </label>
                           </li>
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="color-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="color-1"
                                 className="relative inline-flex justify-center items-center w-8 h-8 border-2 border-transparent peer-checked:border-[#000] rounded-full cursor-pointer"
                              >
                                 <span className="inline-flex w-6 h-6 bg-[#000] rounded-full" />
                              </label>
                           </li>
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="color-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="color-1"
                                 className="relative inline-flex justify-center items-center w-8 h-8 border-2 border-transparent peer-checked:border-[#000] rounded-full cursor-pointer"
                              >
                                 <span className="inline-flex w-6 h-6 bg-[#000] rounded-full" />
                              </label>
                           </li>
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="color-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="color-1"
                                 className="relative inline-flex justify-center items-center w-8 h-8 border-2 border-transparent peer-checked:border-[#000] rounded-full cursor-pointer"
                              >
                                 <span className="inline-flex w-6 h-6 bg-[#000] rounded-full" />
                              </label>
                           </li>
                        </ul>
                     </div>
                     <div className="mb-4">
                        <div className="text-base text-[#3F4646] font-lato mb-1">
                           Size
                        </div>
                        <ul className="flex flex-wrap gap-2 items-center">
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="size-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="size-1"
                                 className="relative w-10 h-7 flex justify-center items-center text-base text-gray-500 font-lato font-normal border-[1.5px] border-gray-400 peer-checked:border-gray-600 peer-checked:!bg-gray-600 peer-checked:text-white rounded cursor-pointer px-2 py-0.5"
                              >
                                 XS
                              </label>
                           </li>
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="size-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="size-1"
                                 className="relative w-10 h-7 flex justify-center items-center text-base text-gray-500 border-[1.5px] border-gray-400 peer-checked:border-[#000] rounded cursor-pointer px-2 py-0.5"
                              >
                                 S
                              </label>
                           </li>
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="size-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="size-1"
                                 className="relative w-10 h-7 flex justify-center items-center text-base text-gray-500 border-[1.5px] border-gray-400 peer-checked:border-gray-600 peer-checked:!bg-gray-600 peer-checked:text-white rounded cursor-pointer px-2 py-0.5"
                              >
                                 M
                              </label>
                           </li>
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="size-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="size-1"
                                 className="relative w-10 h-7 flex justify-center items-center text-base text-gray-500 border-[1.5px] border-gray-400 peer-checked:border-[#000] rounded cursor-pointer px-2 py-0.5"
                              >
                                 L
                              </label>
                           </li>
                           <li>
                              <input
                                 type="checkbox"
                                 name=""
                                 id="size-1"
                                 className="peer hidden"
                              />
                              <label
                                 htmlFor="size-1"
                                 className="relative w-10 h-7 flex justify-center items-center text-base text-gray-500 border-[1.5px] border-gray-400 peer-checked:border-[#000] rounded cursor-pointer px-2 py-0.5"
                              >
                                 XL
                              </label>
                           </li>
                        </ul>
                     </div> */}

                     <div className="mb-4">
                        <ul className="flex flex-nowrap gap-4 items-center">
                           <li>
                              <button
                                 type="button"
                                 className="h-9 flex flex-nowrap gap-2 items-center bg-sky-700 text-white *:font-lato *:text-base py-1.5 px-7 rounded"
                              >
                                 <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1.5em"
                                    width="1.5em"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <circle
                                       cx="176"
                                       cy="416"
                                       r="16"
                                       fill="none"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth="32"
                                    />
                                    <circle
                                       cx="400"
                                       cy="416"
                                       r="16"
                                       fill="none"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth="32"
                                    />
                                    <path
                                       fill="none"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth="32"
                                       d="M48 80h64l48 272h256"
                                    />
                                    <path
                                       fill="none"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth="32"
                                       d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
                                    />
                                 </svg>
                                 <span>Add Cart</span>
                              </button>
                           </li>
                           {/* <li>
                              <div
                                 className="h-9 flex flex-nowrap gap-2 items-center text-[#3C4242] font-lato text-base border border-[#3C4242] py-1.5 px-6 rounded"
                              >
                                 $ 350.26
                              </div>
                           </li> */}
                        </ul>
                     </div>
                     <hr className="h-[1.5px] bg-[#BEBCBD]" />
                  </div>
               </div>
            </div>
         </div>
         <div className="w-full">
            <div className="w-full !py-10">
               <div className="text-xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-5">Product Description</div>

               <div dangerouslySetInnerHTML={{ __html: `${product?.description}` }} className="max-w-full font-lato prose text-gray-400"></div>
               <div className="text-xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-10">Related Products</div>
               <ForWomen />
            </div>
         </div>
      </div>
   );
};

export default ProductName;
