import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
export default function FeedWrapper() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="flex flex-col mx-auto gap-10 mt-24 mb-32 lg:w-6/12">
      <div>
        <img src={posts.chData.data.banner_img} alt="" />
        <div className="flex justify-center items-center">
          <h1 className="text-[5rem]">r/{posts.chData.data.display_name}</h1>
          <div className="w-24">
            <img
              src={posts.chData.data.header_img}
              alt=""
              width={posts.chData.data.header_size}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      {posts.chPosts.data.children.map((item) => {
        return <Card key={uuidv4()} post={item} />;
      })}
    </div>
  );
}
3;
