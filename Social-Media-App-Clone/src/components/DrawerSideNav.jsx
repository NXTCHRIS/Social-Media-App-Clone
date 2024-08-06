/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { IoCloseSharp } from "react-icons/io5";
import DrawerToggle from "./DrawerToggle";
import Divider from "./Divider";
import DrawerButton from "./DrawerButton";
import { Link } from "react-router-dom";
export default function DrawerSideNav({
  listContent,
  drawerContentCss,
  additinalContent,
}) {
  let classCluster = `menu bg-[rgba(13,17,20,255)] border-r border-slate-600 text-base-content min-h-full lg:w-52 p-4  pt-20 ${drawerContentCss}`;
  return (
    <div className="drawer lg:drawer-open w-min lg:w-3/12">
      <DrawerToggle />
      {/* <div className="drawer-content hidden">{<h1>GROOT</h1>}</div> */}
      <div className="drawer-side z-50">
        <ul className={classCluster}>
          {listContent.map((listItem) => {
            return (
              <li key={uuidv4()}>
                <Link
                  className="text-xs md:text-sm lg:text-base"
                  to={
                    listItem.text === "Gaming"
                      ? "/Gaming"
                      : listItem.text == "Movies & TV's"
                      ? "/Movies"
                      : listItem.text == "Sport"
                      ? "/Sports"
                      : "/"
                  }
                >
                  {listItem.icon || null}
                  {listItem.text}
                </Link>
              </li>
            );
          })}
          {<Divider />}
          {additinalContent
            ? additinalContent.map((listItem) => {
                return (
                  <li key={uuidv4()}>
                    <Link className="text-xs md:text-base lg:text-lg">
                      {listItem.icon || null}
                      {listItem.text}
                    </Link>
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
