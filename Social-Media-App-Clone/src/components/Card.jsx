/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";
import { v4 as uuidv4 } from "uuid";
export default function Card({ post }) {
  return (
    <div className="card card-compact bg-base-100 w-contain shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-sm lg:text-base">{post.data.title}</h2>
        <div>
          {post.data.media ? (
            <ReactPlayer
              url={post.data.media.reddit_video.dash_url}
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
        <p className="text-xs lg:text-sm">{post.data.selftext}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-[10px] lg:text-xs">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
