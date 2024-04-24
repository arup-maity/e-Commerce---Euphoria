import SellerHeader from "@/admin-components/seller-layout/SellerHeader";
import SellerSidebar from "@/admin-components/seller-layout/SellerSidebar";
import clsx from "@/utils/clsx";
import Image from "next/image";
import Link from "next/link";
import { FiGrid } from "react-icons/fi";


export default function SellerLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className={clsx(`webx-admin-panel relative w-full h-full bg-gray-100 dark:bg-dark-skin vertical-menu-modern`)}>


         <div className="webx-admin-sidebar fixed bg-white dark:bg-dark-section flex flex-col start-0 z-50">
            <div className="h-full">
               <div className="webx-admin-logo w-full flex flex-nowrap items-center overflow-hidden py-3 px-4">
                  <Link href="/webx-admin" className="brand-icon">
                     {/* <Image src="/logo-icon-01.png" alt="" width={150} height={40} className="h-10 w-auto" /> */}
                  </Link>
                  <Link href="/webx-admin" className="brand-logo flex-grow mx-3">
                     {/* <Image src="/logo-text-01.png" alt="" width={150} height={40} className="h-10 w-auto" /> */}
                  </Link>
                  <div className="collapese-icon">
                     <button className="flex items-center justify-center">
                        <FiGrid size="20" />
                     </button>
                  </div>
               </div>
               <SellerSidebar />
            </div>
         </div>

         <div className="webx-content-wapper relative flex flex-col">
            <div className="webx-admin-header sticky z-50">
               <SellerHeader />
            </div>
            <div className="layout-page-content flex-grow">{children}</div>
            <div className="webx-admin-footer">footer</div>
         </div>
      </div>
   )
}
