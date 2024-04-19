import React from 'react'
import { BsHandbag, BsHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import MyInfo from '@/page-components/account/MyInfo';
import AddressForm from '@/page-components/account/AddressForm';
import WishList from '@/page-components/account/WishList';
import Order from '@/page-components/account/order';

const Account = () => {
   return (
      <div className='theme-container mb-16'>
         <div className="mb-5">
            <ul className="flex gap-1 *:text-sm *:text-gray-500 *:font-lato">
               <li>Home</li>
               <li>/</li>
               <li>My Account</li>
            </ul>
         </div>
         <div className="flex flex-wrap -m-2">
            <div className="w-3/12 p-2">
               <div className="">
                  <div className="text-2xl text-[#3c4242] font-lato font-bold leading-none border-l-4 border-[#8a33fd] pl-4 mb-4">Hello, Arup</div>
                  <ul className='*:flex *:items-center *:gap-4 *:text-base *:text-gray-500 *:px-8 *:py-3'>
                     <li className='hover:bg-[#F6F6F6] border-l-2 border-transparent hover:border-[#3C4242]'><BsHandbag /><span>My orders</span></li>
                     <li className='hover:bg-[#F6F6F6] border-l-2 border-transparent hover:border-[#3C4242]'><BsHeart /><span>My orders</span></li>
                     <li className='hover:bg-[#F6F6F6] border-l-2 border-transparent hover:border-[#3C4242]'><AiOutlineUser /><span>My info</span></li>
                     <li className='hover:bg-[#F6F6F6] border-l-2 border-transparent hover:border-[#3C4242]'><RiLogoutCircleLine /><span>Sign out</span></li>
                  </ul>
               </div>
            </div>
            <div className="w-9/12 p-2">
               {/* <MyInfo /> */}
               {/* <AddressForm /> */}
               {/* <WishList /> */}
               <Order />
            </div>
         </div>
      </div>
   )
}

export default Account