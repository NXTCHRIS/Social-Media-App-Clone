/* eslint-disable react/prop-types */
export default function Button({ text, btnType, btnMod, extCss, btnIcon }) {
  const classCluster = `btn + ${btnType} ${btnMod} ${extCss}`;
  return (
    <button className={classCluster}>
      {btnIcon}
      {text}
    </button>
  );
}
