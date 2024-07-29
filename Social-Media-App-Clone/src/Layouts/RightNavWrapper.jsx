import PopularsList from "../components/PopularsList";
export default function RightNavWrapper() {
  return (
    <div className="mt-32 hidden lg:flex flex-1 justify-center">
      <PopularsList listTitle={"Popular Comunities"} />
    </div>
  );
}
