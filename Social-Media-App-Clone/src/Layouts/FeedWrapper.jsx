import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
export default function FeedWrapper() {
  const posts = useLoaderData();
  return (
    <div className="flex flex-col mx-auto gap-10 lg:w-6/12 mt-2">
      {posts.data.children.map((item) => {
        return (
          <div key={uuidv4()}>
            <Card key={uuidv4()} post={item} />
            <hr className=" w-full lg:w-6/12 bg-slate-200 mx-auto" />
          </div>
        );
      })}
    </div>
  );
}
3;
