import Card from "./components/Card";
import NavBar from "./Layouts/NavBar";
import SideNav from "./Layouts/SideNav";
function App() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideNav />
        <div className="flex flex-col mx-auto gap-10 mt-32">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
export default App;
