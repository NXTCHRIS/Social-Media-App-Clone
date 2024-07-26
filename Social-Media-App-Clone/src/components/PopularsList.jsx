/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
export default function PopularsList({ listTitle }) {
  let popularItems = [
    { text: "r/DestinyTheGame" },
    { text: "r/DestinyTheGame" },
    { text: "r/DestinyTheGame" },
    { text: "r/DestinyTheGame" },
    { text: "r/DestinyTheGame" },
  ];
  return (
    <ul className="menu bg-base-200 rounded-box fixed mx-auto w-contain  h-auto justify-center p-10">
      <h1 className="py-2 px-4 text-lg">{listTitle}</h1>
      {popularItems.map((item) => {
        return (
          <li key={`${uuidv4()}`}>
            <a key={`${uuidv4()}`}>
              {item.text || null}
              {item.icon || null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
