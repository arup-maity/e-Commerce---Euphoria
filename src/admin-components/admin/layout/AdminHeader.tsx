"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

interface HeaderProps { }

const AdminHeader: React.FC<HeaderProps> = () => {
   return (
      <div className="bg-white dark:bg-dark-section rounded px-5">
         <div className="flex items-center justify-between h-14">
            <ul className="flex flex-nowrap gap-2 items-center">
               <li>
                  <IoIosMenu size="27" />
               </li>
               <li className="flex gap-5">
               </li>
            </ul>
            <ul className="flex flex-row items-center gap-4">
               <li className="flex items-center gap-4">
                  <div className="">
                     {/* <Image src="/upload/user2.png" width={40} height={40} className="w-10 h-10 rounded-full" alt="user-image" /> */}
                  </div>
                  <div className="">
                     <h2 className="text-base leading-none mb-1">Arup Maity</h2>
                     <p className="text-xs leading-none text-gray-600">User Admin</p>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default AdminHeader;
