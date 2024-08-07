import NavBar from "../Layouts/NavBar";
import SideNav from "../Layouts/SideNav";
import FeedWrapperSub from "../Layouts/FeedWrapperSub";
import { useEffect } from "react";
export default function SubChannelPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className=" w-0 lg:w-3/12 h-full">
          <SideNav />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <FeedWrapperSub />
        </div>
        <div className="w-0 lg:w-3/12"></div>
      </div>
    </>
  );
}
