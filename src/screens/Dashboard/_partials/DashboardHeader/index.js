import { useEffect, useState } from "react";
import Image from "next/image";
import ClickAwayListener from "react-click-away-listener";
import { usePathname } from "next/navigation";

import UserAvatar from "@/assets/images/user-avatar.png";
import Arrowhead from "@/assets/svgs/Arrowhead.svg";
import Hamburger from "@/assets/svgs/Hamburger.svg";

import DashboardHeaderStyle from "./DashboardHeader.module.scss";

const DashboardHeader = ({ handleToggleHamburger }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOptionsOpen(false);
  }, [pathname]);

  const profile = "";

  return (
    <div className={DashboardHeaderStyle.dashboardHeader}>
      <div className={DashboardHeaderStyle.dashboardHeader__activityBar}>
        <span className={DashboardHeaderStyle.dashboardHeader__left}>
          <span
            className={DashboardHeaderStyle.dashboardHeader__hamburger}
            onClick={handleToggleHamburger}
          >
            <Image src={Hamburger} alt="Hamburger" width="100%" height="100%" />
          </span>
        </span>

        <span className={DashboardHeaderStyle.dashboardHeader__right}>
          <span className={DashboardHeaderStyle.dashboardHeader__divider} />

          <span className={DashboardHeaderStyle.dashboardHeader__avatar}>
            <span
              className={DashboardHeaderStyle.dashboardHeader__avatarGroup}
              onClick={() => setIsOptionsOpen(!isOptionsOpen)}
            >
              <span
                className={DashboardHeaderStyle.dashboardHeader__avatarImage}
              >
                <Image
                  src={UserAvatar}
                  alt="User Avatar"
                  width="100%"
                  height="100%"
                />
              </span>

              <span
                className={
                  isOptionsOpen
                    ? DashboardHeaderStyle[
                        "dashboardHeader__avatarArrow--active"
                      ]
                    : DashboardHeaderStyle.dashboardHeader__avatarArrow
                }
              >
                <Image
                  src={Arrowhead}
                  alt="User Avatar"
                  width="100%"
                  height="100%"
                />
              </span>
            </span>

            {isOptionsOpen && (
              <ClickAwayListener onClickAway={() => setIsOptionsOpen(false)}>
                <div className={DashboardHeaderStyle.dashboardHeader__options}>
                  <div
                    className={
                      DashboardHeaderStyle.dashboardHeader__optionsNameGroup
                    }
                  >
                    <p
                      className={
                        DashboardHeaderStyle.dashboardHeader__optionsTitle
                      }
                    >
                      Oyahebholo Kenneth
                    </p>
                  </div>
                </div>
              </ClickAwayListener>
            )}
          </span>
        </span>
      </div>
    </div>
  );
};
export default DashboardHeader;
