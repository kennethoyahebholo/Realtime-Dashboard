import Image from "next/image";
import React from "react";

import EmptyTableRecordStyle from "./EmptyTableRecord.module.scss";

const EmptyTableRecord = ({ icon, title, subtitle }) => {
  return (
    <div className={EmptyTableRecordStyle.emptyTable}>
      <div className={EmptyTableRecordStyle.emptyTable__content}>
        <div className={EmptyTableRecordStyle.emptyTable__icon}>
          <Image src={icon} alt="empty_state_icon" />
        </div>
        {title && (
          <h4 className={EmptyTableRecordStyle.emptyTable__title}>{title}</h4>
        )}
        {subtitle && (
          <h6 className={EmptyTableRecordStyle.emptyTable__subtitle}>
            {subtitle}
          </h6>
        )}
      </div>
    </div>
  );
};
export default EmptyTableRecord;
