import React from "react";
import { usePathname } from "next/navigation";

import { bottomSidebarLinks, topSidebarLinks } from "./_partials/SidebarRoutes";
import { SidebarLink } from "./_partials";

import SidebarStyles from "./Sidebar.module.scss";

const Sidebar = () => {
  const pathname = usePathname();
  const topLink = topSidebarLinks();
  return (
    <div className={SidebarStyles.sidebar}>
      <div className={SidebarStyles.sidebar__logo}>RTDA</div>

      <div className={SidebarStyles.sidebar__group}>
        <div className={SidebarStyles.sidebar__top}>
          {topLink?.map((list) => (
            <div className={SidebarStyles.sidebar__link} key={list?.title}>
              <SidebarLink
                title={list?.title}
                pathname={pathname}
                icon={list?.icon}
                linkTo={list?.linkTo}
                activeIcon={list?.activeIcon}
                onClick={() => {}}
                activeLink={list?.activeLink}
                handleShowLogOutModal={() => {}}
              />
            </div>
          ))}
        </div>

        <div className={SidebarStyles.sidebar__bottom}>
          {bottomSidebarLinks?.map((list) => (
            <div key={list?.title} className={SidebarStyles.sidebar__link}>
              <SidebarLink
                title={list?.title}
                pathname={pathname}
                icon={list?.icon}
                linkTo={list?.linkTo}
                activeIcon={list?.activeIcon}
                onClick={() => {}}
                activeLink={list?.activeLink}
                handleShowLogOutModal={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
