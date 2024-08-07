/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import { MdArrowCircleUp } from "react-icons/md";
import { MdComment } from "react-icons/md";
import { useState } from "react";
export default function Comment({ comm }) {
  const [showComm, setShowComm] = useState(false);

  return (
    <div className="border mb-5 rounded-xl m-5" key={uuidv4()}>
      <h3 className="font-bold text-sm md:text-base lg:text-lg xl:text-xl p-5">
        u/{comm.data.author}
      </h3>
      <p className="p-5 overflow-hidden">{comm.data.body}</p>
      <div className="flex gap-2 ml-5 mb-5">
        <Button text={comm.data.ups} btnIcon={<MdArrowCircleUp size={25} />} />
        <Button
          handleClick={() => {
            if (showComm == true) {
              setShowComm(false);
            } else {
              setShowComm(true);
            }
          }}
          text={"GROOT"}
          btnIcon={<MdComment size={25} />}
        />
      </div>
      {showComm ? (
        <div className="bg-slate-700 border-b rounded-b-xl">
          {comm.data.replies
            ? comm.data.replies.data.children.map((reply) => {
                return (
                  <div key={uuidv4()}>
                    <h3 className="font-bold text-sm md:text-base lg:text-lg xl:text-xl p-5">
                      {reply.data.author ? "u/" + reply.data.author : null}
                    </h3>
                    <p className="p-5">{reply.data.body}</p>
                  </div>
                );
              })
            : null}
        </div>
      ) : null}
    </div>
  );
}
