import FeedWrapper from "./Layouts/FeedWrapper";
import NavBar from "./Layouts/NavBar";
import RightNavWrapper from "./Layouts/RightNavWrapper";
import SideNav from "./Layouts/SideNav";
function App() {
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
export default App;
