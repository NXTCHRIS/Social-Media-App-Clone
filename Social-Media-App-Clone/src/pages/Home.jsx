import NavBar from "../Layouts/NavBar";
import SideNav from "../Layouts/SideNav";
import FeedWrapper from "../Layouts/FeedWrapper";
import RightNavWrapper from "../Layouts/RightNavWrapper";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideNav />
        <FeedWrapper />
        <RightNavWrapper />
      </div>
    </>
  );
}
