import NavBar from "../Layouts/NavBar";
import SideNav from "../Layouts/SideNav";
import FeedWrapper from "../Layouts/FeedWrapper";
import RightNavWrapper from "../Layouts/RightNavWrapper";
export default function Home() {
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
