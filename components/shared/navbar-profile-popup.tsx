"use client";

import useClickOutside from "@/hooks/useClickOutside";
import userImg from "@/public/user.webp";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const NavbarProfilePopup = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const profileRef = useRef(null);
  useClickOutside(profileRef, () => {
    setShowProfileOptions(false);
  });

  return (
    <div className="relative" ref={profileRef}>
      <button
        className="w-8 h-8 rounded-full ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
        onClick={() => {
          setShowProfileOptions(!showProfileOptions);
        }}
      >
        <Image
          src={userImg}
          alt="Profile Image"
          className="w-ull h-full object-cover rounded-full"
        />
      </button>
      {showProfileOptions && (
        <div
          // ref={profileRef}
          className="absolute right-0 top-full z-[999] mt-2 w-[120px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <Link
              href={"/profile"}
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
              onClick={() => {}}
            >
              Profile
            </Link>
            <a
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarProfilePopup;
