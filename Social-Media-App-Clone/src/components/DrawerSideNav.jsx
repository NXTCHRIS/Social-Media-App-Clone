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
  let classCluster = `menu bg-[rgba(13,17,20,255)] border-r border-slate-600 text-base-content min-h-full w-1/8 lg:w-80 p-4 fixed lg:sticky xl:fixed top-0 left-0 pt-20 ${drawerContentCss}`;
  return (
    <div className="drawer lg:drawer-open w-min">
      <DrawerToggle />
      {/* <div className="drawer-content hidden">{<h1>GROOT</h1>}</div> */}
      <div className="drawer-side z-50">
        <ul className={classCluster}>
          {listContent.map((listItem) => {
            return (
              <li key={uuidv4()}>
                <a className="text-xs md:text-base lg:text-lg">
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
                    <a className="text-xs md:text-base lg:text-lg">
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
