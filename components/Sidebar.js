import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
    HashtagIcon,
    InboxIcon,
    UserIcon,
  } from "@heroicons/react/outline";

export default function Sidebar() {
    return (
      <div>
          <div className="">
              <Image
              width="50"
              height="50"
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
              ></Image>
          </div>
          <div className="">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>   
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </div>

          {/* Button */}

          <button> Tweet </button>


          {/* profile */}
          <div className="">
        <img
          src="https://eightsuzuki.github.io/images/profile.png"
          alt="user-img"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">suzuki8</h4>
          <p className="text-gray-500">@8Infu</p>
        </div>
        <DotsHorizontalIcon className=""/>
      </div>
  
  
  {/*  */}
      </div>
      )
  }
  