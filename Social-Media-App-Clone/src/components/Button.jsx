/* eslint-disable react/prop-types */
export default function ButtonsNav({ text, btnType, btnMod, extCss, btnIcon }) {
  const classCluster = `btn + ${btnType} ${btnMod} ${extCss}`;
  return (
    <button className={classCluster}>
      {btnIcon}
      {text}
    </button>
  );
}
