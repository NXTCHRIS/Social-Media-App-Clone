/* eslint-disable no-undef */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return fetch("https://www.reddit.com/r/popular.json?raw_json=1");
    },
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}
export default App;
