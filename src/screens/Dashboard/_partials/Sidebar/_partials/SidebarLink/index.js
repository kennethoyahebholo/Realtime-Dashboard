import Link from "next/link";
import SidebarTab from "../SideBarTab";

const SidebarLink = ({
  title,
  pathname,
  icon,
  activeIcon,
  activeLink,
  linkTo,
  handleShowLogOutModal,
}) => {
  const handleSelectSideTabState = () => {
    if (linkTo === "") {
      return (
        <SidebarTab
          activeLink={activeLink}
          activeIcon={activeIcon}
          linkTo={linkTo}
          icon={icon}
          title={title}
          pathname={pathname}
          onClick={() => handleShowLogOutModal()}
        />
      );
    }
    return (
      <Link href={linkTo} style={{ textDecoration: "none" }}>
        <SidebarTab
          activeLink={activeLink}
          activeIcon={activeIcon}
          linkTo={linkTo}
          icon={icon}
          title={title}
          pathname={pathname}
          onClick={() => {}}
        />
      </Link>
    );
  };

  return <div>{handleSelectSideTabState()}</div>;
};
export default SidebarLink;
