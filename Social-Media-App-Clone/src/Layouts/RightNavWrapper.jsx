import { useLoaderData } from "react-router-dom";
import PopularsList from "../components/PopularsList";
export default function RightNavWrapper() {
  const posts = useLoaderData();
  console.log(posts);
  let popularSubReddits = [];
  posts.data.children.map((post) => {
    popularSubReddits.push(`${post.data.subreddit}`);
  });
  return (
    <div className="hidden lg:flex lg:w-3/12 justify-center">
      <PopularsList
        listTitle={"Popular Comunities"}
        popularItems={popularSubReddits}
      />
    </div>
  );
}
