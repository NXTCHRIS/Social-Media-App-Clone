import { useLoaderData, useParams } from "react-router-dom";

export default function SubChannelPage() {
  let subRedditData = useLoaderData();
  let param = useParams();
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={subRedditData.chData.data.banner_img}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{param.channelName}</h1>
          <p className="py-6 h-[500px] overflow-scroll">
            {subRedditData.chData.data.description}
          </p>
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
    </div>
  );
}
