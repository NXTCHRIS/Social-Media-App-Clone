/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export default function PopularsList({ listTitle, popularItems }) {
  return (
    <ul className="menu bg-black rounded-box fixed mx-auto w-min  h-1/2 overflow-y-scroll overflow-x-hidden items-start flex-nowrap my-28">
      <h1 className="p-5 px-4 text-base lg:text-xl">{listTitle}</h1>
      <hr className="bg-white w-full mb-5" />
      {popularItems.map((item) => {
        return (
          <li key={`${uuidv4()}`} className="lg:text-base px-5">
            <Link key={`${uuidv4()}`} to={`/r/${item}`}>
              {`r/${item}`}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
