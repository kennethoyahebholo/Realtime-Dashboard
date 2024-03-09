import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useGlobalContext } from "@/context/store";
import Sidebar from "../Sidebar";
import DashboardHeader from "../DashboardHeader";

import DashboardLayoutStyles from "./DashboardLayout.module.scss";

const DashboardLayout = ({ children }) => {
  const { isShowSidebar, setIsShowSidebar } = useGlobalContext();
  const pathname = usePathname();

  useEffect(() => {
    setIsShowSidebar(false);
  }, [pathname]);

  return (
    <div className={DashboardLayoutStyles.dashboardLayout}>
      {isShowSidebar && (
        <div className={DashboardLayoutStyles.dashboardLayout__sidebarMobile}>
          <Sidebar />
        </div>
      )}
      <div className={DashboardLayoutStyles.dashboardLayout__sidebar}>
        <Sidebar />
      </div>

      <div className={DashboardLayoutStyles.dashboardLayout__body}>
        <DashboardHeader
          showHamburgerIcon={isShowSidebar}
          handleToggleHamburger={() => {
            setIsShowSidebar(!isShowSidebar);
          }}
        />
        <div className={DashboardLayoutStyles.dashboardLayout__children}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
