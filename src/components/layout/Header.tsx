'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDebounceValue } from 'usehooks-ts'

const Header = () => {

   const [show, setShow] = useState(false)
   const [debouncedValue, setValue] = useDebounceValue('', 500)

   function handleMenu() {
      setShow(prev => !prev)
   }
   return (
      <div className="w-full bg-white">
         <div className="theme-container">
            <div className="h-20 flex items-center justify-around gap-4">
               <div className="block lg:hidden" onClick={handleMenu}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path></svg>
               </div>
               <div className="logo">
                  <Link href="/">
                     <Image src="/logo.png" width={100} height={45} alt="euphoria logo" className="" />
                  </Link>
               </div>
               <div className="flex-grow">
                  <div className="relative w-full lg:w-[80%] flex mx-auto">
                     <div className="w-full">
                        <div className="h-11 w-full flex items-center rounded-lg bg-[#f6f6f6] text-slate-400 p-1">
                           <div className="p-2">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path></svg>
                           </div>
                           <input
                              type="text"
                              placeholder="Search ..."
                              className="!bg-transparent w-full h-10 text-base text-[#807d7e] placeholder:text-sm placeholder:italic placeholder:text-[#807d7e] focus:outline-0"
                              onChange={e => setValue(e.target.value)}
                           />
                        </div>
                     </div>
                     {
                        debouncedValue &&
                        <div className="absolute w-full top-12 left-0 z-10">
                           <div className="w-full bg-white shadow-2xl rounded-lg p-2">
                              <ul className="*:text-base *:py-1.5">
                                 <li>Mi Mobile</li>
                                 <li>Mi Mobile</li>
                                 <li>Mi Mobile</li>
                                 <li>Mi Mobile</li>
                                 <li>Mi Mobile</li>
                                 <li>Mi Mobile</li>
                              </ul>
                           </div>
                        </div>
                     }

                  </div>
               </div>
               <ul className="flex space-x-3 *:w-11 *:h-11 *:bg-[#f6f6f6] *:justify-center *:items-center *:rounded-lg">
                  <li role="button" className="hidden lg:flex">
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M9.99486 4.9298C8.49535 3.18229 5.99481 2.71221 4.11602 4.31241C2.23723 5.91261 1.97273 8.58806 3.44815 10.4806C4.67486 12.0542 8.38733 15.3729 9.60407 16.447C9.7402 16.5672 9.80827 16.6273 9.88766 16.6509C9.95695 16.6715 10.0328 16.6715 10.1021 16.6509C10.1815 16.6273 10.2495 16.5672 10.3857 16.447C11.6024 15.3729 15.3149 12.0542 16.5416 10.4806C18.017 8.58806 17.7848 5.89578 15.8737 4.31241C13.9626 2.72904 11.4944 3.18229 9.99486 4.9298Z"
                           stroke="#807D7E"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </li>
                  <li role="button" className="flex">
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M10.0007 11.6663C12.3018 11.6663 14.1673 9.80086 14.1673 7.49967C14.1673 5.19849 12.3018 3.33301 10.0007 3.33301C7.69946 3.33301 5.83398 5.19849 5.83398 7.49967C5.83398 9.80086 7.69946 11.6663 10.0007 11.6663ZM10.0007 11.6663C6.31875 11.6663 3.33398 13.9049 3.33398 16.6663M10.0007 11.6663C13.6825 11.6663 16.6673 13.9049 16.6673 16.6663"
                           stroke="#807D7E"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                        />
                     </svg>
                  </li>
                  <li role="button" className="flex">
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M2.5 3.33301H3.00526C3.85578 3.33301 4.56986 3.97343 4.6621 4.81893L5.3379 11.0138C5.43014 11.8593 6.14422 12.4997 6.99474 12.4997H14.205C14.9669 12.4997 15.6317 11.9831 15.82 11.2449L16.9699 6.7356C17.2387 5.68179 16.4425 4.65708 15.355 4.65708H5.5M5.52063 15.5205H6.14563M5.52063 16.1455H6.14563M14.6873 15.5205H15.3123M14.6873 16.1455H15.3123M6.66667 15.833C6.66667 16.2932 6.29357 16.6663 5.83333 16.6663C5.3731 16.6663 5 16.2932 5 15.833C5 15.3728 5.3731 14.9997 5.83333 14.9997C6.29357 14.9997 6.66667 15.3728 6.66667 15.833ZM15.8333 15.833C15.8333 16.2932 15.4602 16.6663 15 16.6663C14.5398 16.6663 14.1667 16.2932 14.1667 15.833C14.1667 15.3728 14.5398 14.9997 15 14.9997C15.4602 14.9997 15.8333 15.3728 15.8333 15.833Z"
                           stroke="#807D7E"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                        />
                     </svg>
                  </li>
               </ul>
            </div>
            <div className="hidden lg:flex items-center space-x-7 pb-2">
               <div className="">
                  <ul className="flex items-center space-x-2 *:text-base *:font-lato">
                     <li className="flex items-center gap-2 border border-transparent hover:border-slate-400 rounded-full px-4 py-1">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><rect width="176" height="176" x="48" y="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"></rect><rect width="176" height="176" x="288" y="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"></rect><rect width="176" height="176" x="48" y="288" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"></rect><rect width="176" height="176" x="288" y="288" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"></rect></svg>
                        <span>Deperment</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path></svg>
                     </li>
                     <li className="flex items-center gap-2 border border-transparent hover:border-slate-400 rounded-full px-4 py-1">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="176" height="176" x="48" y="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"></rect><rect width="176" height="176" x="288" y="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"></rect><rect width="176" height="176" x="48" y="288" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"></rect><rect width="176" height="176" x="288" y="288" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"></rect></svg>
                        <span>Service</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path></svg>
                     </li>
                  </ul>
               </div>
               <span className="inline-flex w-0.5 h-5 bg-slate-400"></span>
               <div className="">
                  <ul className="flex items-center space-x-7 *:text-base *:font-lato *:text-slate-500">
                     <li>Fashion</li>
                     <li>Mobile</li>
                     <li>Laptop</li>
                     <li>Beauty</li>
                     <li>Toy</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
