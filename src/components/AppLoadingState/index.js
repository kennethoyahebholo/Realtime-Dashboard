import React from "react";
import { Oval } from "react-loader-spinner";

import AppLoadingStateStyles from "./AppLoadingState.module.scss";

const AppLoadingState = ({
  height = "80",
  width = "80",
  color = "rgb(229, 192, 136)",
  ariaLabel = "loading",
}) => {
  return (
    <div className={AppLoadingStateStyles?.loader}>
      <Oval height={height} width={width} color={color} ariaLabel={ariaLabel} />
    </div>
  );
};

export default AppLoadingState;
