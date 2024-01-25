import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";

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
          </div>
  
  
  
      </div>
      )
  }
  