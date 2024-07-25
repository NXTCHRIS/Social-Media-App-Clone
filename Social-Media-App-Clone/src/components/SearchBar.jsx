/* eslint-disable react/prop-types */
export default function SearchBar({ inputTypeClass, extraCss, ...props }) {
  let classCluster = `input ${inputTypeClass} ${extraCss}`;
  return <input className={classCluster} {...props} />;
}
