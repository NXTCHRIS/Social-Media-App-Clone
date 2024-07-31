/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Button from "../components/Button";
import { MdArrowCircleUp } from "react-icons/md";
import { MdComment } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import ReactPlayer from "react-player";
import { v4 as uuidv4 } from "uuid";
export default function Card({ post }) {
  return (
    <div className="card card-compact bg-[rgba(13,17,20,255)] w-contain border-t rounded-none">
      <div className="">
        <h3 className="py-3">r/{post.data.subreddit}</h3>
        <h1 className="card-title text-sm lg:text-xl py-3 text-white">
          {post.data.title}
        </h1>
        <div className="">
          {post.data.media ? (
            <ReactPlayer
              url={
                post.data.media.reddit_video
                  ? post.data.media.reddit_video.dash_url
                  : post.data.media.reddit_video
              }
              controls
              width="full"
              light={post.data.preview.images[0].source.url}
            />
          ) : post.data.preview ? (
            <figure>
              <img
                src={
                  post.data.preview
                    ? post.data.preview.images[0].source.url
                    : null
                }
                className="w-full"
              />
            </figure>
          ) : post.data.media_metadata ? (
            <div className="">
              {Object.values(post.data.media_metadata).map((item) => {
                return <img key={uuidv4()} src={item.s.u} className="mb-2" />;
              })}
            </div>
          ) : null}
        </div>
        {post.data.selftext ? (
          <p className="text-xs lg:text-sm h-28 overflow-auto py-3">
            {post.data.selftext}
          </p>
        ) : null}
        <div className="card-actions justify-start gap-2 md:w-6/12 py-3 flex-nowrap">
          <Button
            btnIcon={<MdArrowCircleUp size={25} color="white" />}
            text={post.data.ups}
            extCss={
              "text-wrap overflow-hidden text-white lg:btn-md btn-sm items-center"
            }
          />
          <Button
            btnIcon={<MdComment size={25} color="white" />}
            text={post.data.num_comments}
            extCss={
              "text-wrap overflow-hidden text-white lg:btn-md btn-sm items-center"
            }
          />
          <Button
            btnIcon={<IoMdShareAlt size={25} color="white" />}
            text={"SHARE"}
            extCss={
              "text-wrap overflow-hidden text-white lg:btn-md btn-sm items-center"
            }
          />
        </div>
      </div>
    </div>
  );
}
