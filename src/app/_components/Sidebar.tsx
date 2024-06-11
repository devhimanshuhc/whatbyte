import {
  Badge,
  BarChart,
  GitGraph,
  LayoutDashboard,
  Paperclip,
  StickyNote,
} from "lucide-react";
import React from "react";

type Props = {};

const SidebarComp = (props: Props) => {
  return (
    <>
      <aside
        className="absolute border-r-2 top-22 left-0 w-64 lg:h-[1200px] md:h-[2200px] transition-transform -translate-x-full sm:translate-x-0 md:block sm:hidden"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BarChart />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Badge />
                <span className="ms-3">Skill Test</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <StickyNote />
                <span className="ms-3">Internship</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarComp;
