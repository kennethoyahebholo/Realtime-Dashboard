import React from "react";

import SidebarTabStyles from "./SidebarTab.module.scss";

const SidebarTab = ({ title, pathname, activeLink, onClick }) => {
  return (
    <div className={SidebarTabStyles.sideBarLink}>
      <div
        className={
          activeLink.includes(pathname)
            ? SidebarTabStyles?.sidebarLink__mainLink
            : SidebarTabStyles["sidebarLink__mainLink--inactive"]
        }
        onClick={onClick}
      >
        <span className={SidebarTabStyles.sidebarLink__mainLinkTitle}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default SidebarTab;
