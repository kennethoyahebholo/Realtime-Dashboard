import Link from "next/link";

import toTitleCase from "@/utils/toTitleCase";

import BackIcon from "@/assets/svg_components/BackIcon";

import PageHeaderStyle from "./PageHeader.module.scss";

const PageHeader = ({ title, name, subTitle, hasBackButton, linkBackTo }) => {
  return (
    <div className={PageHeaderStyle.pageHeader}>
      <div className={PageHeaderStyle.pageHeader__content}>
        <div className={PageHeaderStyle.pageHeader__top}>
          {hasBackButton && (
            <Link
              href={linkBackTo}
              className={PageHeaderStyle.pageHeader__backIcon}
            >
              <BackIcon />
            </Link>
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
