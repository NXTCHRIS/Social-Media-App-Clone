import NavBar from "../Layouts/NavBar";
import SideNav from "../Layouts/SideNav";
import FeedWrapperSub from "../Layouts/FeedWrapperSub";
export default function SubChannelPage() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideNav />
        <FeedWrapperSub />
        <div className="flex-1"></div>
      </div>
    </>
  );
}
