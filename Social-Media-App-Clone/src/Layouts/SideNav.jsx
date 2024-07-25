import { IoGameControllerSharp } from "react-icons/io5";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { MdMovie } from "react-icons/md";
import { MdSportsBaseball } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import DrawerSideNav from "../components/DrawerSideNav";
export default function SideNav() {
  const sideNavItems = [
    { text: "Popular", icon: <BsArrowUpRightSquareFill size={25} /> },
    { text: "Gaming", icon: <IoGameControllerSharp size={25} /> },
    { text: "Movies & TV's", icon: <MdMovie size={25} /> },
    { text: "Sport", icon: <MdSportsBaseball size={25} /> },
  ];
  const utilityNavItems = [
    { text: "About", icon: <IoMdInformationCircle size={25} /> },
    { text: "Contact", icon: <MdContactPhone size={25} /> },
    { text: "Careers", icon: <MdWork size={25} /> },
    { text: "Support", icon: <IoIosHelpCircle size={25} /> },
  ];
  return (
    <>
      <DrawerSideNav
        listContent={sideNavItems}
        drawerContentCss={"font-bold"}
        additinalContent={utilityNavItems}
      />
    </>
  );
}
