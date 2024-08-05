/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Button from "../components/Button";
import { MdArrowCircleUp } from "react-icons/md";
import { MdComment } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
export default function Card({ post }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="card card-compact bg-[rgba(13,17,20,255)] max-w-screen-sm xl:w-9/12 xl:mx-auto border-t rounded-none">
      <div className="">
        <h3 className="py-3">r/{post.data.subreddit}</h3>
        <h1 className="card-title text-sm lg:text-xl py-3 text-white">
          <Link
            to={`/p/${post.data.subreddit}/${post.data.id}/${post.data.title}`}
          >
            {" "}
            {post.data.title}
          </Link>
        </h1>
        <div className="max-w-xs md:max-w-full  mx-auto">
          {post.data.media ? (
            <ReactPlayer
              url={
                post.data.media.reddit_video
                  ? post.data.media.reddit_video.dash_url
                  : post.data.media.reddit_video
              }
              controls
              width="full"
              // light={
              //   post.data.preview.images[0].source.url
              //     ? post.data.preview.images[0].source.url
              //     : "white"
              // }
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
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              className=""
            >
              {Object.values(post.data.media_metadata).map((item) => {
                return (
                  <div key={uuidv4()} className="w-full">
                    <img src={item.s.u} className="mb-2 aspect-square " />
                  </div>
                );
              })}
            </Carousel>
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
