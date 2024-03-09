import { useRouter } from "next/navigation";

import toTitleCase from "@/utils/toTitleCase";

import BackIcon from "@/assets/svg_components/BackIcon";

import PageHeaderStyle from "./PageHeader.module.scss";

const PageHeader = ({ title, name, subTitle, hasBackButton }) => {
  const router = useRouter();

  return (
    <div className={PageHeaderStyle.pageHeader}>
      <div className={PageHeaderStyle.pageHeader__content}>
        <div className={PageHeaderStyle.pageHeader__top}>
          {hasBackButton && (
            <span
              className={PageHeaderStyle.pageHeader__backIcon}
              onClick={() => router.push(-1)}
            >
              <BackIcon />
            </span>
          )}
          <h4 className={PageHeaderStyle.pageHeader__name}>
            <span className={PageHeaderStyle.pageHeader__title}>
              {toTitleCase(title || "")}
            </span>
            , {toTitleCase(name || "")}
          </h4>
        </div>
        <p className={PageHeaderStyle.pageHeaderComp__subtitle}>{subTitle}</p>
      </div>
    </div>
  );
};
export default PageHeader;
