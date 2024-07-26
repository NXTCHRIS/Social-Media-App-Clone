import Card from "./components/Card";
import PopularsList from "./components/PopularsList";
import NavBar from "./Layouts/NavBar";
import SideNav from "./Layouts/SideNav";
function App() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideNav />
        <div className="flex flex-col mx-auto gap-10 mt-32 mb-32 flex-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="mt-32 hidden lg:flex flex-1 justify-center">
          <PopularsList listTitle={"Popular Comunities"} />
        </div>
      </div>
    </>
  );
}
export default App;
