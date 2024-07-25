/* eslint-disable react/prop-types */
export default function DrawerToggle({ btnIcon, btnText }) {
  return (
    <>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {<h1>Groot</h1>}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          {btnIcon || null}
          {btnText || null}
        </label>
      </div>
    </>
  );
}
