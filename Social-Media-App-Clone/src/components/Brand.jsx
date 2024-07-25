/* eslint-disable react/prop-types */
let logoImg = ({ icon }) => {
  return { icon };
};
let logoText = ({ text }) => {
  return { text };
};
export default function Brand({ children }) {
  return <div className="hidden lg:flex items-center gap-2">{children}</div>;
}

Brand.icon = logoImg;
Brand.text = logoText;
