/* eslint-disable react/prop-types */
export default function Divider({ extraCss }) {
  let classCluster = `divider ${extraCss}`;
  return <div className={classCluster}></div>;
}
