import { GiCompactDisc } from "react-icons/gi";
export default function NavBar() {
  return (
    <div className="navbar bg-base-100 lg:flex-row">
      <div className="flex-1">
        <label
          htmlFor="my-drawer-2"
          className="btn  drawer-button flex lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <div className="hidden lg:flex items-center gap-2">
          <GiCompactDisc size={50} color="yellow" />
          <h1 className="font-bold text-xl">GROOT</h1>
        </div>
      </div>
      <div className="form-control flex-1">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered lg:w-full w-auto"
        />
      </div>
      <div className="flex-1 gap-2 justify-end">
        <div className="dropdown dropdown-end">
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
            className="menu menu-md dropdown-content dropdown-end bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
        </div>
      </div>
    </div>
  );
}
