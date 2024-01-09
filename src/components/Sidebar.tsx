import Image from "next/image";
import { SiLionair } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { SlCalculator } from "react-icons/sl";
import { BiMoviePlay } from "react-icons/bi";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <RxDashboard size={25} />,
    title: "Dashboard",
    subtitle: "Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <SlCalculator size={25} />,
    title: "Counter",
    subtitle: "Local State",
  },
  {
    path: "/dashboard/movies",
    icon: <BiMoviePlay size={25} />,
    title: "Movies",
    subtitle: "Static Generation",
  },
];

export function Sidebar() {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <SiLionair />
          <span className="mr-2">My</span>
          <span className="text-blue-500">Admin</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={50}
              height={50}
              src={"/images/profile.jpeg"}
              alt={"User avatar"}
            ></Image>
          </span>
          <span className="text-sm md:text-base font-bold">Ariel Duarte</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
}
