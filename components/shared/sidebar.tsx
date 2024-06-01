"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { popularTopicsList, sidebarNavItems } from "./data";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="app-layout__sidebar bg-background border-r border-border overflow-y-auto overflow-x-hidden custom-scrollbar max-h-[calc(100vh-55px)] px-4 py-3.5">
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
