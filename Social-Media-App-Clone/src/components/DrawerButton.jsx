/* eslint-disable react/prop-types */
export default function DrawerButton({ extraCSS, drawerBtn, drawerTxt }) {
  let classCluster = `btn drawer-button lg:hidden btn-ghost justify-start ${extraCSS}`;
  return (
    <label htmlFor="my-drawer-2" className={classCluster}>
      {drawerBtn || null}
      {drawerTxt || null}
    </label>
  );
}
