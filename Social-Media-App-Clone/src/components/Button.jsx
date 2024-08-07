/* eslint-disable react/prop-types */
export default function Button({
  text,
  btnType,
  btnMod,
  extCss,
  btnIcon,
  handleClick,
}) {
  const classCluster = `btn + ${btnType} ${btnMod} ${extCss}`;
  return (
    <button className={classCluster} onClick={handleClick}>
      {btnIcon}
      {text}
    </button>
  );
}
