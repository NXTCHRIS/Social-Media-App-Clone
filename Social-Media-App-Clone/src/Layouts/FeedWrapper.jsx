import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
export default function FeedWrapper() {
  const posts = useLoaderData();
  console.log(posts.data.children);
  return (
    <div className="flex flex-col mx-auto gap-10 mt-32 mb-32 flex-1">
      {posts.data.children.map((item) => {
        return <Card key={uuidv4()} post={item} />;
      })}
    </div>
  );
}
3;
