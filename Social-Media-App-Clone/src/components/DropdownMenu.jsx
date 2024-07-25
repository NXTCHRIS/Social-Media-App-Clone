/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
export default function DropdownMenu({
  menuItems,
  modifierClass,
  extraCss,
  btnText,
  btnIcon,
}) {
  let classCluster = `dropdown ${modifierClass} ${extraCss}`;
  return (
    <details className={classCluster}>
      <summary className="btn btn-ghost m-1 p-0">
        {btnText || null}
        {btnIcon || null}
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 mt-3 shadow">
        {menuItems.map((item) => {
          return (
            <li key={uuidv4()}>
              <a>
                {item.text}
                {item.icon || null}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
