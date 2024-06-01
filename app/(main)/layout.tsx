import Navbar from "@/components/shared/navbar";
import RightSidebar from "@/components/shared/right-sidebar";
import Sidebar from "@/components/shared/sidebar";
import { PropsWithChildren } from "react";

const MainAppLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="app-layout">
      <Navbar />
      <Sidebar />
      <section className="app-layout__main px-4 py-3.5 mx-auto max-w-[calc(100vw-270px)] w-[1120px] mobile-md:max-w-full">
        <div className="relative flex gap-4 w-full ">
          <div className="max-w-[calc(100%-(16px+315px))] tablet:max-w-max w-full">
            {children}
          </div>

          <RightSidebar />
        </div>
      </section>
    </main>
  );
};

export default MainAppLayout;
