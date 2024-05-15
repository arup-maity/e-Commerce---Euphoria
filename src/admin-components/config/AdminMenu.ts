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
   //   {
   //     id: "dashboard",
   //     title: "Dashboard",
   //     //  icon: <RxDashboard size={20} />,
   //     icon: "d",
   //     children: [
   //       {
   //         id: "home",
   //         title: "home",
   //         //   icon: <BsCircle size={8} />,
   //         icon: "d",
   //         permissions: ["administrator", "admin"],
   //         Link: "/webx-admin/home",
   //         navLink: "/webx-admin/home"
   //       }
   //     ]
   //   },
   //   {
   //     id: "media",
   //     title: "Media",
   //     icon: "d",
   //     permissions: ["admin", "editor"],
   //     Link: "/webx-admin/media",
   //     navLink: "/webx-admin/media"
   //   },
   //   {
   //     id: "post",
   //     title: "Post",
   //     icon: "d",
   //     children: [
   //       {
   //         id: "allpost",
   //         title: "All Posts",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/post/allpost?type=post",
   //         navLink: "/webx-admin/post/allpost"
   //       },
   //       {
   //         id: "addpost",
   //         title: "Add New",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/post/addpost?type=post",
   //         navLink: "/webx-admin/post/addpost"
   //       },
   //       {
   //         id: "categories",
   //         title: "Categories",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/post/categories?type=post-category",
   //         navLink: "/webx-admin/post/categories"
   //       },
   //       {
   //         id: "tags",
   //         title: "Tags",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/post/tags?type=post-tag",
   //         navLink: "/webx-admin/post/tags"
   //       }
   //     ]
   //   },
   //   {
   //     id: "arduino",
   //     title: "Arduino",
   //     icon: "d",
   //     children: [
   //       {
   //         id: "allpost",
   //         title: "All Posts",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/arduino/allpost?type=arduino",
   //         navLink: "/webx-admin/arduino/allpost"
   //       },
   //       {
   //         id: "addpost",
   //         title: "Add New",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/arduino/addpost?type=arduino",
   //         navLink: "/arduino/arduino/addpost"
   //       },
   //       {
   //         id: "categories",
   //         title: "Categories",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/arduino/categories?type=arduino-category",
   //         navLink: "/webx-admin/arduino/categories"
   //       },
   //       {
   //         id: "tags",
   //         title: "Tags",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/arduino/tags?type=arduino-tags",
   //         navLink: "/webx-admin/arduino/tags"
   //       }
   //     ]
   //   },
   //   {
   //     id: "comments",
   //     title: "Comments",
   //     icon: "d",
   //     Link: "/webx-admin/comments",
   //     navLink: "/webx-admin/comments"
   //   },
   //   {
   //     id: "user",
   //     title: "User",
   //     icon: "d",
   //     permissions: ["administrator", "admin"],
   //     children: [
   //       {
   //         id: "userList",
   //         title: "User List",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/users",
   //         navLink: "/webx-admin/users"
   //       },
   //       {
   //         id: "profile",
   //         title: "My Profile",
   //         icon: "d",
   //         permissions: ["admin", "editor"],
   //         Link: "/webx-admin/users/profile",
   //         navLink: "/webx-admin/users/profile"
   //       }
   //     ]
   //   },
   {
      id: "profile",
      title: "Profile",
      icon: "p",
      Link: "/admin/profile",
      navLink: "/admin/profile"
   },
   // {
   //    id: "product",
   //    title: "Product",
   //    icon: "d",
   //    permissions: ["administrator", "admin"],
   //    Link: "/seller/theme-customize",
   //    navLink: "/webx-admin/theme-customize"
   // },
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
            permissions: ["admin", "editor"],
            Link: "/admin/product/all-products",
            navLink: "/admin/product/all-products",
         },
         {
            id: "categories",
            title: "categories",
            icon: "d",
            permissions: ["admin", "editor"],
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
            permissions: ["admin", "editor"],
            Link: "/admin/home-page/top-brands",
            navLink: "/admin/home-page/top-brands",
         },
         {
            id: "new-arrival",
            title: "New Arrival",
            icon: "d",
            permissions: ["admin", "editor"],
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
            permissions: ["admin", "editor"],
            Link: "/admin/users/all-users",
            navLink: "/admin/users/all-users",
         },
      ]
   },
];

export default SidebarMenu;
