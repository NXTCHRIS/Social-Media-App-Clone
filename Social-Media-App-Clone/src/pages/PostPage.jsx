import { useLoaderData } from "react-router-dom";
import NavBar from "../Layouts/NavBar";
import SideNav from "../Layouts/SideNav";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
export default function PostPage() {
  let postData = useLoaderData();
  console.log(postData);
  return (
    <>
      {/* <h1>{postData[0].data.children[0].data.title}</h1>
      {postData[1].data.children.map((comm) => {
        return (
          <div key={uuidv4()}>
            <h3>u/{comm.data.author}</h3>
            <p>{comm.data.body}</p>
            <button>{comm.data.ups}</button>
            <div className="bg-yellow-300">
              {comm.data.replies
                ? comm.data.replies.data.children.map((reply) => {
                    return <p key={uuidv4()}>{reply.data.body}</p>;
                  })
                : null}
            </div>
          </div>
        );
      })} */}
      <NavBar />
      <div className="flex">
        <SideNav />
        <div className="flex flex-col mx-auto gap-10 mt-24 mb-32 lg:w-6/12">
          <Card post={postData[0].data.children[0]} />
          {postData[1].data.children.map((comm) => {
            return (
              <div
                className="max-w-screen-sm xl:w-9/12 xl:mx-auto border-t rounded-none"
                key={uuidv4()}
              >
                <h3>u/{comm.data.author}</h3>
                <p>{comm.data.body}</p>
                <button>{comm.data.ups}</button>
                <div className="bg-yellow-300">
                  {comm.data.replies
                    ? comm.data.replies.data.children.map((reply) => {
                        return (
                          <div key={uuidv4()}>
                            <h5>u/{reply.data.author}</h5>
                            <p>{reply.data.body}</p>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden xl:flex xl:w-3/12"></div>
      </div>
    </>
  );
}
