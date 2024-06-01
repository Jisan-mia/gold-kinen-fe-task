"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";

const ResponsiveMenuButton = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="hidden mobile-md:flex">
        <button
          className="bg-transparent cursor-pointer"
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <Menu className="size-6 " />
        </button>
      </div>

      <Sidebar
        isResponsiveSidebar={true}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </>
  );
};

export default ResponsiveMenuButton;
