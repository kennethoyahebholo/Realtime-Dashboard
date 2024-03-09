import { useGlobalContext } from "@/context/store";

export const topSidebarLinks = () => {
  const { stockId } = useGlobalContext();
  return [
    {
      title: "Home",
      linkTo: "/",
      activeLink: ["/"],
      key: "HOME_ICON",
    },
    {
      title: "Stocks",
      linkTo: "/stocks?page=1",
      activeLink: ["/stocks", `/stocks/${stockId}`],
      key: "STOCKS__ICON",
    },
  ];
};

export const bottomSidebarLinks = [
  {
    title: "Logout",
    linkTo: "",
    activeLink: "",
    key: "LOGOUT_ICON",
  },
];
