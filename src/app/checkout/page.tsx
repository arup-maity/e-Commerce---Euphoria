import Image from "next/image";

const Checkout = () => {
   return (
      <div className="theme-container">
         <div className="w-full flex flex-wrap -mx-4">
            <div className="w-8/12 px-4">
               <div className="w-full">
                  <div className="text-2xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-4">Check Out</div>
                  <p className="text-lg font-medium text-gray-500 mb-10">Billing Details</p>
                  <div className="w-full flex flex-wrap -m-2">
                     <div className="w-6/12 p-2">
                        <fieldset>
                           <label htmlFor="" className="block text-sm font-medium">First Name*</label>
                           <input type="text" name="" id="" className="bg-[#F6F6F6] h-11 w-full rounded-md p-3" placeholder="First Name" />
                        </fieldset>
                     </div>
                     <div className="w-6/12 p-2">
                        <fieldset>
                           <label htmlFor="" className="block text-sm font-medium">Last Name*</label>
                           <input type="text" name="" id="" className="bg-[#F6F6F6] h-11 w-full rounded-md p-3" placeholder="Last Name" />
                        </fieldset>
                     </div>
                     <div className="w-6/12 p-2">
                        <fieldset>
                           <label htmlFor="" className="block text-sm font-medium">Country / Region*</label>
                           <input type="text" name="" id="" className="bg-[#F6F6F6] h-11 w-full rounded-md p-3" placeholder="Country / Region" />
                        </fieldset>
                     </div>
                     <div className="w-6/12 p-2">
                        <fieldset>
                           <label htmlFor="" className="block text-sm font-medium">Street Address*</label>
                           <input type="text" name="" id="" className="bg-[#F6F6F6] h-11 w-full rounded-md p-3" placeholder="Street Address" />
                        </fieldset>
                     </div>
                     <div className="w-6/12 p-2">
                        <fieldset>
                           <label htmlFor="" className="block text-sm font-medium">Apt, suite, unit</label>
                           <input type="text" name="" id="" className="bg-[#F6F6F6] h-11 w-full rounded-md p-3" placeholder="Apt, suite, unit" />
                        </fieldset>
                     </div>
                  </div>
                  <div className="mt-5">
                     <button type="button" className="bg-indigo-600 text-sm text-white rounded py-2 px-4">Continue to delivery</button>
                  </div>
                  <div className="my-4">
                     <label htmlFor="" className="font-lato text-base text-gray-500"><input type="checkbox" name="" id="" /> Save my information for a faster checkout</label>
                  </div>
                  <hr />
                  <div className="text-xl mt-4 mb-2">Shipping Address</div>
                  <p className="text-sm text-gray-500 font-lato mb-5">Select the address that matches your card or payment method.</p>
                  <div className="bg-[#F6F6F6] p-4 space-y-4 rounded-md">
                     <fieldset>
                        <label htmlFor="" className="block text-sm font-medium"><input type="radio" name="" id="" />Same as Billing address</label>
                     </fieldset>
                     <hr />
                     <fieldset>
                        <label htmlFor="" className="block text-sm font-medium"><input type="radio" name="" id="" />Use a different shipping address</label>
                     </fieldset>
                  </div>
                  <div className="mt-10">
                     <div className="text-xl mt-4 mb-2">Payment Method</div>
                     <p className="text-sm text-gray-500 font-lato mb-5">All transactions are secure and encrypted.</p>
                     <div className="bg-[#F6F6F6] p-4 space-y-4 rounded-md">
                        <div className="">
                           <label htmlFor="" className="block text-sm font-medium"><input type="radio" name="" id="" />Credit Card</label>
                           <p className="text-sm text-gray-500 font-lato mt-2 mb-4">We accept all major credit cards.</p>
                           <ul className="flex flex-nowrap gap-4 mb-4">
                              <li className="bg-white flex items-center rounded-md py-2 px-4">
                                 <Image src={'/googlePay.jpg'} alt="" width={40} height={16} />
                              </li>
                              <li className="bg-white flex items-center rounded-md py-2 px-4">
                                 <Image src={'/visa.jpg'} alt="" width={40} height={16} />
                              </li>
                              <li className="bg-white flex items-center rounded-md py-2 px-4">
                                 <Image src={'/paypal.jpg'} alt="" width={40} height={16} />
                              </li>
                           </ul>
                           <div className="w-full flex flex-wrap -m-3">
                              <div className="w-6/12 p-3">
                                 <input type="text" name="" id="" className="w-full h-10 bg-transparent text-gray-600 text-base font-lato border border-slate-300 rounded-md px-4" placeholder="Card number" />
                              </div>
                              <div className="w-6/12 p-3">
                                 <input type="text" name="" id="" className="w-full h-10 bg-transparent text-gray-600 text-base font-lato border border-slate-300 rounded-md px-4" placeholder="Name of card" />
                              </div>
                              <div className="w-6/12 p-3">
                                 <input type="text" name="" id="" className="w-full h-10 bg-transparent text-gray-600 text-base font-lato border border-slate-300 rounded-md px-4" placeholder="Expiration date (MM/YY)" />
                              </div>
                              <div className="w-6/12 p-3">
                                 <input type="text" name="" id="" className="w-full h-10 bg-transparent text-gray-600 text-base font-lato border border-slate-300 rounded-md px-4" placeholder="Security Code" />
                              </div>
                           </div>
                        </div>
                        <hr />
                        <fieldset>
                           <label htmlFor="" className="block text-sm font-medium"><input type="radio" name="" id="" />Cash on delivery</label>
                           <p>Pay with cash upon delivery.</p>
                        </fieldset>
                        <hr />
                        <fieldset>
                           <label htmlFor="" className="block text-sm font-medium"><input type="radio" name="" id="" />Paypal</label>
                        </fieldset>
                     </div>
                  </div>
                  <div className="my-10">
                     <button className="bg-indigo-600 text-white text-base rounded-md py-3 px-5">Pay Now</button>
                  </div>
               </div>
            </div>
            <div className="w-4/12 -px-4">
               <div className="w-full">
                  <div className="font-lato text-base text-gray-500 *:flex *:flex-nowrap *:items-center *:gap-2 space-y-3">
                     <div>
                        <div className="">
                           <Image src='/img-24.png' alt="" width={65} height={65} className="aspect-square" />
                        </div>
                        <div className="flex-grow">
                           <p className="font-lato text-base text-gray-500 line-clamp-1">Blue Flower Print Crop Top</p>
                           <p className="font-lato text-sm text-gray-500">Color: red</p>
                           <p className="font-lato text-sm text-gray-500">2 x $29.00</p>
                        </div>
                        <div className="font-lato text-base text-gray-700">
                           $29.00
                        </div>
                     </div>
                     <hr />
                     <div>
                        <div className="">
                           <Image src='/img-24.png' alt="" width={65} height={65} className="aspect-square" />
                        </div>
                        <div className="flex-grow">
                           <p className="font-lato text-base text-gray-500 line-clamp-1">Blue Flower Print Crop Top</p>
                           <p className="font-lato text-sm text-gray-500">Color: red</p>
                           <p className="font-lato text-sm text-gray-500">2 x $29.00</p>
                        </div>
                        <div className="font-lato text-base text-gray-700">
                           $29.00
                        </div>
                     </div>
                     <hr />
                     <div>
                        <div className="">
                           <Image src='/img-24.png' alt="" width={65} height={65} className="aspect-square" />
                        </div>
                        <div className="flex-grow">
                           <p className="font-lato text-base text-gray-500 line-clamp-1">Blue Flower Print Crop Top</p>
                           <p className="font-lato text-sm text-gray-500">Color: red</p>
                           <p className="font-lato text-sm text-gray-500">2 x $29.00</p>
                        </div>
                        <div className="font-lato text-base text-gray-700">
                           $29.00
                        </div>
                     </div>
                     <hr />
                     <div>
                        <div className="">
                           <Image src='/img-24.png' alt="" width={65} height={65} className="aspect-square" />
                        </div>
                        <div className="flex-grow">
                           <p className="font-lato text-base text-gray-500 line-clamp-1">Blue Flower Print Crop Top</p>
                           <p className="font-lato text-sm text-gray-500">Color: red</p>
                           <p className="font-lato text-sm text-gray-500">2 x $29.00</p>
                        </div>
                        <div className="font-lato text-base text-gray-700">
                           $29.00
                        </div>
                     </div>
                     <hr />
                     <div className="">
                        <span className="flex-grow">Subtotal (5 items)</span>
                        <span>$566.00</span>
                     </div>
                     <div className="">
                        <span className="flex-grow">Savings</span>
                        <span>- $56.00</span>
                     </div>
                     <hr />
                     <div className="">
                        <span className="flex-grow">Shipping</span>
                        <span>- $5.00</span>
                     </div>
                     <hr />
                     <div className="">
                        <span className="flex-grow">Total</span>
                        <span>- $56.00</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Checkout;
