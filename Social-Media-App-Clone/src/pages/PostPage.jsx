import { useLoaderData } from "react-router-dom";
import NavBar from "../Layouts/NavBar";
import SideNav from "../Layouts/SideNav";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import Comment from "../components/Comment";
export default function PostPage() {
  let postData = useLoaderData();
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className=" w-0 lg:w-3/12">
          <SideNav />
        </div>
        <div className="flex-1">
          <Card post={postData[0].data.children[0]} />
          {postData[1].data.children.map((comm) => {
            return <Comment key={uuidv4()} comm={comm} />;
          })}
        </div>
        <div className=" w-0 lg:w-3/12"></div>
      </div>
    </>
  );
}
