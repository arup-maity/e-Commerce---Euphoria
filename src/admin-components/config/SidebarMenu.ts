import { ReactElement, ReactNode } from "react";
import { BsCircle, BsChatDots } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { RiArticleLine } from "react-icons/ri";
import { FiUsers, FiSettings } from "react-icons/fi";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineInsertComment } from "react-icons/md";
import { IconType } from "react-icons";

interface ChildNavItem {
   id: string;
   title: string;
   icon: any; // This can be any React node
   permissions?: string[];
   Link: string;
   navLink: string;
}

interface SidebarMenuItem {
   id: string;
   title: string;
   icon: any; // Type for React Icons
   children?: ChildNavItem[];
   permissions?: string[];
   Link?: string;
   navLink?: string;
}

const SidebarMenu: SidebarMenuItem[] = [
   {
      id: "product",
      title: "Product",
      icon: "d",
      children: [
         {
            id: "all-products",
            title: "All Product",
            icon: "d",
            Link: "/seller/product/all-products",
            navLink: "/seller/product/all-products",
         },
         {
            id: "add-product",
            title: "Add Product",
            icon: "d",
            Link: "/seller/product/add-product",
            navLink: "/seller/product/add-product",
         },
      ]
   },
   {
      id: "profile",
      title: "Profile",
      icon: "p",
      children: [
         {
            id: "profile",
            title: "Profile",
            icon: "d",
            Link: "/seller/profile",
            navLink: "/seller/profile",
         },
         {
            id: "store-details",
            title: "Store Details",
            icon: "d",
            Link: "/seller/profile/store-details",
            navLink: "/seller/profile/store-details",
         },
         {
            id: "payment-details",
            title: "Payment Details",
            icon: "d",
            Link: "/seller/profile/payment-details",
            navLink: "/seller/profile/payment-details",
         },
      ]
   },
];

export default SidebarMenu;
