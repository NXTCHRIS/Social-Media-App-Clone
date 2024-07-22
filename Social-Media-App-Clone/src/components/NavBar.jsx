import { useState } from "react";
import GrootLogo from "../assets/noun-groot-3369771.svg";
export default function NavBar() {
  const [isLogedIn] = useState(false);
  return (
    <div className="navbar bg-base-100 p-5 flex-col gap-5 md:flex-row">
      <div className="flex-1 items-center">
        <img src={GrootLogo} alt="" width={50} />
        <a className="btn btn-ghost text-xl">MEDIA</a>
      </div>
      <div className="form-control flex-1">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full"
        />
      </div>
      <div className="flex-1 gap-2 justify-end hidden md:flex">
        <a className="btn rounded-full">Sign Up</a>
        <a className="btn rounded-full">Log In</a>
        <div className="dropdown dropdown-end">
          {isLogedIn ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
