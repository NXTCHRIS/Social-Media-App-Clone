/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { IoCloseSharp } from "react-icons/io5";
import DrawerToggle from "./DrawerToggle";
import Divider from "./Divider";
import DrawerButton from "./DrawerButton";
export default function DrawerSideNav({
  listContent,
  drawerContentCss,
  additinalContent,
}) {
  let classCluster = `menu bg-[rgba(13,17,20,255)] border-r border-slate-600 text-base-content min-h-full w-80 p-4 ${drawerContentCss}`;
  return (
    <div className="drawer lg:drawer-open">
      <DrawerToggle />
      <div className="drawer-side">
        <ul className={classCluster}>
          {listContent.map((listItem) => {
            return (
              <li key={uuidv4()}>
                <a>
                  {listItem.icon || null}
                  {listItem.text}
                </a>
              </li>
            );
          })}
          {<Divider />}
          {additinalContent
            ? additinalContent.map((listItem) => {
                return (
                  <li key={uuidv4()}>
                    <a>
                      {listItem.icon || null}
                      {listItem.text}
                    </a>
                  </li>
                );
              })
            : null}
          <li>
            <DrawerButton
              extraCSS={"lg:hidden"}
              drawerBtn={<IoCloseSharp size={25} />}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
