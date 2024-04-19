import Image from "next/image";
import Link from "next/link";

const Cart = () => {
   return (<div className="theme-container">
      <div className="w-full flex flex-nowrap gap-5">
         <div className="w-8/12">
            <div className="w-full space-y-5">
               <div className="">
                  <div className="w-full flex gap-6 mb-2">
                     <div className="">
                        <Image src={'/img-23.png'} alt="" width={100} height={100} className="aspect-square" />
                     </div>
                     <div className="flex-grow flex flex-col">
                        <div className="flex-grow">
                           <div>Blue Flower Print Crop Top</div>
                           <ul className="text-sm text-gray-500">
                              <li>Color: red</li>
                              <li>Size: XL</li>
                           </ul>
                        </div>
                        <div className="font-semibold">$29.00</div>
                     </div>
                     <div className="">
                        <div className="font-semibold">1 x $29.00</div>
                     </div>
                  </div>
                  <div className="flex items-center">
                     <div className="flex gap-1 w-24 border">
                        <p>-</p>
                        <input type="text" name="qty" id="" readOnly value='1' className="w-5" />
                        <p>+</p>
                     </div>
                     <div className="text-sm font-medium ms-4">REMOVE</div>
                  </div>
               </div>
               <div className="">
                  <div className="w-full flex gap-6 mb-2">
                     <div className="">
                        <Image src={'/img-23.png'} alt="" width={100} height={100} className="aspect-square" />
                     </div>
                     <div className="flex-grow">
                        <div>Blue Flower Print Crop Top</div>
                        <ul className="text-sm text-gray-500">
                           <li>Color: red</li>
                           <li>Size: XL</li>
                        </ul>
                        <div className="font-semibold">$29.00</div>
                     </div>
                     <div className="">
                        <div className="font-semibold">1 x $29.00</div>
                     </div>
                  </div>
                  <div className="flex items-center">
                     <div className="flex gap-1 w-24 border">
                        <p>-</p>
                        <input type="text" name="qty" id="" readOnly value='1' className="w-5" />
                        <p>+</p>
                     </div>
                     <div className="text-sm font-medium ms-4">REMOVE</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="w-4/12">
            <div className="w-full px-4">
               <div className="w-full">
                  <ul className="*:flex *:flex-row space-y-1 mb-2">
                     <li>
                        <span className="flex-grow">Price (5items)</span>
                        <span>$256.00</span>
                     </li>
                     <li>
                        <span className="flex-grow">Discount</span>
                        <span>$56.00</span>
                     </li>
                     <li>
                        <span className="flex-grow">Delivery Charge</span>
                        <span>$56.00</span>
                     </li>
                  </ul>
                  <hr />
                  <div className="flex flex-nowrap py-2">
                     <span className="flex-grow">Total Amount</span>
                     <span>$200.00</span>
                  </div>
                  <hr />
                  <div className="mt-2">You will save ₹8,338 on this order</div>
               </div>
               <div className="mt-4 text-right">
                  <Link href="/" className="bg-indigo-500 text-white rounded py-2 px-8">Proceed To Checkout</Link>
               </div>
            </div>
         </div>
      </div>
   </div>);
}

export default Cart;