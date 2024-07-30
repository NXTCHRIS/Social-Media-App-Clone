/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
export default function PopularsList({ listTitle, popularItems }) {
  return (
    <ul className="menu bg-black rounded-box fixed mx-auto w-contain  h-1/2 overflow-scroll p-10 items-center flex-nowrap">
      <h1 className="py-2 px-4 text-base lg:text-xl">{listTitle}</h1>
      {popularItems.map((item) => {
        return (
          <li key={`${uuidv4()}`} className="lg:text-base ">
            <a key={`${uuidv4()}`}>{item}</a>
          </li>
        );
      })}
    </ul>
  );
}
