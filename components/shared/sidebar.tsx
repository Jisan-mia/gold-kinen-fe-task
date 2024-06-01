"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import { popularTopicsList, sidebarNavItems } from "./data";

const Sidebar = ({
  isResponsiveSidebar = false,
  showSidebar = false,
  setShowSidebar,
}: {
  isResponsiveSidebar?: boolean;
  showSidebar?: boolean;
  setShowSidebar?: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  useEffect(() => {
    if (isResponsiveSidebar && showSidebar && setShowSidebar) {
      setShowSidebar(false);
    }
  }, [pathname]);
  return (
    <aside
      className={cn(
        `bg-background border-r border-border overflow-y-auto overflow-x-hidden custom-scrollbar px-4 py-3.5 transition-all duration-200 ${
          isResponsiveSidebar
            ? "z-50 absolute w-full h-full top-0 right-0 bottom-0 pt-0 translate-x-[-100%]"
            : ".app-layout__sidebar mobile-md:hidden max-h-[calc(100vh-55px)]"
        }`,
        {
          "translate-x-[0%]": showSidebar,
        }
      )}
    >
      {isResponsiveSidebar && (
        <div className="w-full flex items-center justify-between h-[55px] mb-2">
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

          <button
            className="bg-transparent"
            onClick={() => {
              if (setShowSidebar) setShowSidebar(false);
            }}
          >
            <X className="size-6" />
          </button>
        </div>
      )}
      <div></div>
      <ul>
        {sidebarNavItems.map((sidebarItem) => {
          const { icon: Icon, label, link, pathnameMatcher } = sidebarItem;
          return (
            <li key={sidebarItem.id}>
              <Link
                href={link}
                className={cn(
                  "flex items-center gap-2.5 rounded-md hover:bg-[#F6F8F9] justify-start px-5 py-2.5",
                  {
                    "bg-[#E5EBEE] hover:bg-[#E5EBEE]":
                      pathnameMatcher.includes(pathname),
                  }
                )}
              >
                <Icon className="size-5" />
                <span className="text-sm text-normal">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="bg-border/60 h-[1px] w-full my-3"></div>

      <div>
        <h3 className="flex items-center gap-2.5 rounded-md hover:bg-[#F6F8F9] justify-between px-3 py-2.5 text-sm cursor-pointer text-[##576F76] uppercase font-normal">
          Popular Topics
        </h3>

        <ul>
          {popularTopicsList.map((topic) => {
            const { topicColor, topic: topicName, slug } = topic;
            return (
              <li key={topic.id}>
                <Link
                  href={slug}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md hover:bg-[#F6F8F9] justify-start px-5 py-2.5",
                    {
                      "bg-[#E5EBEE] hover:bg-[#E5EBEE]":
                        pathname.includes(slug),
                    }
                  )}
                >
                  <div
                    className={cn("h-2.5 w-2.5 rounded-full")}
                    style={{
                      backgroundColor: topicColor,
                    }}
                  ></div>
                  <span className="text-sm text-normal">{topicName}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
