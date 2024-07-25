import { GiCompactDisc } from "react-icons/gi";
export default function NavBar() {
  return (
    <div className="navbar bg-[rgba(13,17,20,255)] lg:flex-row border-b border-slate-600">
      <div className="flex-1">
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button flex lg:hidden btn-ghost"
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
        <details className="dropdown dropdown-end lg:hidden">
          <summary className="btn btn-ghost m-1">...</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 mt-3 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
        <button className="btn btn-accent  rounded-2xl hidden lg:block">
          Sign Up
        </button>
        <button className="btn btn-accent rounded-2xl hidden lg:block">
          Log In
        </button>
      </div>
    </div>
  );
}
