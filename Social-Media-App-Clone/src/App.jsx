/* eslint-disable no-undef */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SubChannelPage from "./pages/SubChannelPage";
import PostPage from "./pages/PostPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return fetch("https://www.reddit.com/r/popular.json?raw_json=1");
    },
  },
  {
    path: "/Gaming",
    element: <Home />,
    loader: async () => {
      return fetch("https://www.reddit.com/search.json?q=gaming&raw_json=1");
    },
  },
  {
    path: "/Movies",
    element: <Home />,
    loader: async () => {
      return fetch("https://www.reddit.com/search.json?q=Movies&raw_json=1");
    },
  },
  {
    path: "/Sports",
    element: <Home />,
    loader: async () => {
      return fetch("https://www.reddit.com/search.json?q=Sport&raw_json=1");
    },
  },
  {
    path: "/r/:channelName",
    element: <SubChannelPage />,
    loader: async ({ params }) => {
      let channelData = await fetch(
        `https://www.reddit.com/r/${params.channelName}/about.json`
      );
      let channelPosts = await fetch(
        `https://www.reddit.com/r/${params.channelName}.json?raw_json=1`
      );
      let chData = await channelData.json();
      let chPosts = await channelPosts.json();
      return { chData, chPosts };
    },
  },
  {
    path: "/p/:channelName/:postId/:postTitle",
    element: <PostPage />,
    loader: async ({ params }) => {
      let newSplit = params.postTitle.split(" ");
      let articleTitle = [];
      newSplit.forEach((word, index) => {
        if (newSplit.length - 1 != index) {
          articleTitle.push(`${word}_`);
        } else {
          articleTitle.push(`${word}`);
        }
      });
      articleTitle.join("");
      console.log(params);
      let postData = await fetch(
        `https://www.reddit.com/r/${params.channelName}/comments/${params.postId}/${articleTitle}/.json?raw_json=1`
      );

      return postData;
    },
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
