import { IoGameControllerSharp } from "react-icons/io5";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { MdMovie } from "react-icons/md";
import { MdSportsBaseball } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
export default function SideNav() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 ">
          <li>
            <a className="flex items-center">
              <span>
                <BsArrowUpRightSquareFill size={25} />
              </span>
              Popular
            </a>
          </li>
          <li>
            <a className="flex items-center">
              <span>
                <IoGameControllerSharp size={25} />
              </span>
              Gaming
            </a>
          </li>
          <li>
            <a className="flex items-center">
              <span>
                <MdMovie size={25} />
              </span>
              Movies & TV
            </a>
          </li>
          <li>
            <a className="flex items-center">
              <span>
                <MdSportsBaseball size={25} />
              </span>
              Sports
            </a>
          </li>
          <li>
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className=" drawer-button w-1/4  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </li>
          {<div className="divider w-full"></div>}
          <li>
            <a className="flex items-center">
              <span>
                <IoMdInformationCircle size={25} />
              </span>
              About
            </a>
          </li>
          <li>
            <a className="flex items-center">
              <span>
                <MdContactPhone size={25} />
              </span>
              Contact
            </a>
          </li>
          <li>
            <a className="flex items-center">
              <span>
                <MdWork size={25} />
              </span>
              Careers
            </a>
          </li>
          <li>
            <a className="flex items-center">
              <span>
                <IoIosHelpCircle size={25} />
              </span>
              Support
            </a>
          </li>
          {<div className="divider w-full"></div>}
        </ul>
      </div>
    </div>
  );
}
