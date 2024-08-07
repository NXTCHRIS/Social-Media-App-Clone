import { useLoaderData } from "react-router-dom";
import NavBar from "../Layouts/NavBar";
import SideNav from "../Layouts/SideNav";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import Comment from "../components/Comment";
import { useEffect } from "react";
export default function PostPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let postData = useLoaderData();
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className=" w-0 lg:w-3/12">
          <SideNav />
        </div>
        <div className="w-full lg:w-9/12">
          <Card post={postData[0].data.children[0]} />
          {postData[1].data.children.map((comm) => {
            return (
              <div key={uuidv4()} className="lg:w-9/12 mx-auto">
                <Comment key={uuidv4()} comm={comm} />
              </div>
            );
          })}
        </div>
        <div className=" w-0 lg:w-3/12"></div>
      </div>
    </>
  );
}
