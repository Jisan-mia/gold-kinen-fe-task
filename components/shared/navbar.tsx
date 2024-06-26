import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Autocomplete from "../autocomplete/autocomplete";
import ResponsiveMenuButton from "./navbar-menubtn";
import NavbarProfilePopup from "./navbar-profile-popup";
const Navbar = () => {
  return (
    <nav className="app-layout__navbar bg-background h-full w-full border-b border-border flex items-center">
      <div className="grid items-center w-full px-4 grid-cols-12 tablet:flex tablet:items-center tablet:justify-between tablet:gap-3">
        <div className="col-start-1 col-end-3">
          <div className="h-[35px] w-max">
            <Link href={"/"} className="h-full w-full">
              <Image
                src={"/logo1.webp"}
                alt="Kotha App logo image"
                width={2000}
                height={419}
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-stretch col-start-3 col-end-9">
          <Autocomplete />
        </div>
        <div className="flex col-start-9 col-end-13 mobile-md:hidden">
          <div className="flex items-center justify-end w-full gap-3">
            <button className="rounded-full hover:bg-secondary text-primary flex items-center gap-1.5 h-10 px-3 ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 font-medium text-sm">
              <PlusIcon className="size-5 text-primary" />
              Create
            </button>
            {/* <button className="w-8 h-8 rounded-full ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
              <Image
                src={userImg}
                alt="Profile Image"
                className="w-ull h-full object-cover rounded-full"
              />
            </button> */}
            <NavbarProfilePopup />
          </div>
        </div>
        <ResponsiveMenuButton />
      </div>
    </nav>
  );
};

export default Navbar;
