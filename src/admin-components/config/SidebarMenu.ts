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
    id: "dashboard",
    title: "Dashboard",
    //  icon: <RxDashboard size={20} />,
    icon: "d",
    children: [
      {
        id: "home",
        title: "home",
        //   icon: <BsCircle size={8} />,
        icon: "d",
        permissions: ["administrator", "admin"],
        Link: "/webx-admin/home",
        navLink: "/webx-admin/home"
      }
    ]
  },
  {
    id: "media",
    title: "Media",
    icon: "d",
    permissions: ["admin", "editor"],
    Link: "/webx-admin/media",
    navLink: "/webx-admin/media"
  },
  {
    id: "post",
    title: "Post",
    icon: "d",
    children: [
      {
        id: "allpost",
        title: "All Posts",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/post/allpost?type=post",
        navLink: "/webx-admin/post/allpost"
      },
      {
        id: "addpost",
        title: "Add New",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/post/addpost?type=post",
        navLink: "/webx-admin/post/addpost"
      },
      {
        id: "categories",
        title: "Categories",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/post/categories?type=post-category",
        navLink: "/webx-admin/post/categories"
      },
      {
        id: "tags",
        title: "Tags",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/post/tags?type=post-tag",
        navLink: "/webx-admin/post/tags"
      }
    ]
  },
  {
    id: "arduino",
    title: "Arduino",
    icon: "d",
    children: [
      {
        id: "allpost",
        title: "All Posts",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/arduino/allpost?type=arduino",
        navLink: "/webx-admin/arduino/allpost"
      },
      {
        id: "addpost",
        title: "Add New",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/arduino/addpost?type=arduino",
        navLink: "/arduino/arduino/addpost"
      },
      {
        id: "categories",
        title: "Categories",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/arduino/categories?type=arduino-category",
        navLink: "/webx-admin/arduino/categories"
      },
      {
        id: "tags",
        title: "Tags",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/arduino/tags?type=arduino-tags",
        navLink: "/webx-admin/arduino/tags"
      }
    ]
  },
  {
    id: "comments",
    title: "Comments",
    icon: "d",
    Link: "/webx-admin/comments",
    navLink: "/webx-admin/comments"
  },
  {
    id: "user",
    title: "User",
    icon: "d",
    permissions: ["administrator", "admin"],
    children: [
      {
        id: "userList",
        title: "User List",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/users",
        navLink: "/webx-admin/users"
      },
      {
        id: "profile",
        title: "My Profile",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/users/profile",
        navLink: "/webx-admin/users/profile"
      }
    ]
  },
  {
    id: "chat",
    title: "Chat",
    icon: "d",
    Link: "/webx-admin/chat",
    navLink: "/webx-admin/chat"
  },
  {
    id: "theme-customize",
    title: "Theme Customize",
    icon: "d",
    permissions: ["administrator", "admin"],
    Link: "/webx-admin/theme-customize",
    navLink: "/webx-admin/theme-customize"
  },
  {
    id: "settings",
    title: "Settings",
    icon: "d",
    permissions: ["administrator", "admin"],
    children: [
      {
        id: "general",
        title: "General",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/settings/general",
        navLink: "/webx-admin/settings/general"
      },
      {
        id: "mail-server",
        title: "Mail Server",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/settings/mail-server",
        navLink: "/webx-admin/settings/mail-server"
      }
    ]
  },
  {
    id: "ui",
    title: "Ui Component",
    icon: "d",
    permissions: ["administrator", "admin"],
    children: [
      {
        id: "input",
        title: "Input",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/ui/input",
        navLink: "/webx-admin/ui/input"
      },
      {
        id: "button",
        title: "Button",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/ui/button",
        navLink: "/webx-admin/ui/button"
      },
      {
        id: "offcanvas",
        title: "Offcanvas",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/ui/offcanvas",
        navLink: "/webx-admin/ui/offcanvas"
      },
      {
        id: "accordion",
        title: "Accordion",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/ui/accordion",
        navLink: "/webx-admin/ui/accordion"
      },
      {
        id: "editor",
        title: "Editor",
        icon: "d",
        permissions: ["admin", "editor"],
        Link: "/webx-admin/ui/editor",
        navLink: "/webx-admin/ui/editor"
      }
    ]
  }
];

export default SidebarMenu;
