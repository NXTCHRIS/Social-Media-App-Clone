import { GiCompactDisc } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import SearchBar from "../components/SearchBar";
import DropdownMenu from "../components/DropdownMenu";
import Button from "../components/Button";
import NavBarWrapper from "../components/NavBarWrapper";
import DrawerButton from "../components/DrawerButton";
export default function NavBar() {
  return (
    <NavBarWrapper
      bgColor={"bg-[rgba(13,17,20,255)]"}
      extraCss={"lg:flex-row border-b border-slate-600"}
    >
      <div className="flex-1 justify-start  lg:justify-start gap-2">
        <div className="hidden lg:flex items-center gap-2">
          <GiCompactDisc size={50} color="yellow" />
          <h1 className="font-bold text-xs md:text-base lg:text-lg">GROOT</h1>
        </div>
        <DrawerButton
          extraCSS={"lg:hidden p-0"}
          drawerBtn={<MdMenu size={20} />}
        />
        <GiCompactDisc size={20} color="yellow" className="lg:hidden" />
      </div>
      <div className="flex-1 hidden md:flex">
        <SearchBar
          type="text"
          placeholder="Search your favorite topics"
          inputTypeClass={"input-bordered"}
          extraCss={"lg:w-full w-auto"}
        />
      </div>
      <div className="flex-1 gap-2 justify-end">
        <DropdownMenu
          menuItems={[{ text: "Log In" }, { text: "Sign In" }]}
          modifierClass={"dropdown-end"}
          extraCss={"md:hidden"}
          btnIcon={<HiDotsHorizontal size={20} />}
        />
        <Button
          btnType={"btn-accent"}
          extCss={"rounded-3xl hidden md:flex text-xs md:text-base lg:text-lg"}
          text={"Log In"}
        />
        <Button
          btnType={"btn-accent"}
          extCss={"rounded-3xl hidden md:block text-xs md:text-base lg:text-lg"}
          text={"Sign Up"}
        />
      </div>
    </NavBarWrapper>
  );
}
