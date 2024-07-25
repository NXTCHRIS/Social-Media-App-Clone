/* eslint-disable react/prop-types */
export default function NavBarWrapper({ children, bgColor, extraCss }) {
  let classCluster = `navbar ${bgColor} ${extraCss}`;
  return <div className={classCluster}>{children}</div>;
}
