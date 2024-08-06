/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
export default function Comment({ comm }) {
  return (
    <div className="" key={uuidv4()}>
      <h3>u/{comm.data.author}</h3>
      <p>{comm.data.body}</p>
      <button>{comm.data.ups}</button>
      <div className="bg-yellow-300">
        {comm.data.replies
          ? comm.data.replies.data.children.map((reply) => {
              return (
                <div key={uuidv4()}>
                  <h5>{reply.data.author ? reply.data.author : null}</h5>
                  <p>{reply.data.body}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
