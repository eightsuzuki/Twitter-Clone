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
            <SidebarMenuItem text="Home" Icon={HomeIcon}/>   
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </div>
  
  
  
      </div>
      )
  }
  