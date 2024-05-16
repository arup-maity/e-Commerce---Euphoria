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
      id: "profile",
      title: "Profile",
      icon: "p",
      Link: "/admin/profile",
      navLink: "/admin/profile"
   },
   {
      id: "product",
      title: "Product",
      icon: "d",
      permissions: ["administrator", "admin"],
      children: [
         {
            id: "all-products",
            title: "All Product",
            icon: "d",
            permissions: ["admin", "superAdmin"],
            Link: "/admin/product/all-products",
            navLink: "/admin/product/all-products",
         },
         {
            id: "categories",
            title: "categories",
            icon: "d",
            permissions: ["admin", "superAdmin"],
            Link: "/admin/product/categories",
            navLink: "/admin/product/categories",
         },
      ]
   },
   {
      id: "home-page",
      title: "Home Page",
      icon: "d",
      permissions: ["administrator", "admin"],
      children: [
         {
            id: "banner",
            title: "Banner",
            icon: "d",
            permissions: ["admin", "editor"],
            Link: "/admin/home-page/banner",
            navLink: "/admin/home-page/banner",
         },
         {
            id: "top-brands",
            title: "Top Brands",
            icon: "d",
            permissions: ["admin", "superAdmin"],
            Link: "/admin/home-page/top-brands",
            navLink: "/admin/home-page/top-brands",
         },
         {
            id: "new-arrival",
            title: "New Arrival",
            icon: "d",
            permissions: ["admin", "superAdmin"],
            Link: "/admin/home-page/new-arrival",
            navLink: "/admin/home-page/new-arrival",
         },
      ]
   },
   {
      id: "users",
      title: "Users",
      icon: "p",
      Link: "/admin/users",
      navLink: "/admin/users",
      children: [
         {
            id: "all-users",
            title: "All Users",
            icon: "d",
            permissions: ["superAdmin"],
            Link: "/admin/users/all-users",
            navLink: "/admin/users/all-users",
         },
      ]
   },
   {
      id: "role-management",
      title: "User Role Management",
      icon: "p",
      permissions: ["superAdmin"],
      Link: "/admin/role-management",
      navLink: "/admin/role-management",

   },
];

export default SidebarMenu;
