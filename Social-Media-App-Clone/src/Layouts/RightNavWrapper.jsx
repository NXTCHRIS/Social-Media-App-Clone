import { useLoaderData } from "react-router-dom";
import PopularsList from "../components/PopularsList";
export default function RightNavWrapper() {
  const posts = useLoaderData();
  console.log(posts);
  let popularSubReddits = [];
  posts.data.children.map((post) => {
    popularSubReddits.push(`r/${post.data.subreddit}`);
  });
  return (
    <div className="hidden lg:flex w-4/12 justify-start p-20">
      <PopularsList
        listTitle={"Popular Comunities"}
        popularItems={popularSubReddits}
      />
    </div>
  );
}
