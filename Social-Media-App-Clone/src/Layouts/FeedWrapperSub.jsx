import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
export default function FeedWrapper() {
  const posts = useLoaderData();
  return (
    <>
      {/* <div className="">
        {posts.chData.data.banner_img ? (
          <img src={posts.chData.data.banner_img} alt="" width={320} />
        ) : null}
      </div> */}
      {/* <div className="flex flex-col items-start max-w-screen-sm xl:w-9/12 xl:mx-auto ">
        {posts.chData.data.banner_img ? (
          <div className="w-full">
            <img src={posts.chData.data.banner_img} alt="" />
          </div>
        ) : null}
        <div className="flex justify-center items-center flex-row-reverse m-5 gap-12">
          <h1 className="text-5xl md:text-6xl lg:text-12xl xl:text-3xl">
            r/{posts.chData.data.display_name}
          </h1>
          {posts.chData.data.header_img ? (
            <div className="w-24">
              <img
                src={posts.chData.data.header_img}
                alt=""
                width={posts.chData.data.header_size}
                className="rounded-full"
              />
            </div>
          ) : null}
        </div>
      </div> */}
      {posts.chPosts.data.children.map((item) => {
        return (
          <div key={uuidv4()} className="w-full">
            <Card key={uuidv4()} post={item} />
            <hr className=" w-full lg:w-6/12 bg-slate-200 my-2 mx-auto" />
          </div>
        );
      })}
    </>
  );
}
3;
