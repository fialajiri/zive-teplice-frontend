import React from "react";
import Logo from "../layout/logo";

const LoadingSpinner = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__as-overlay"}`}>
      <div
        className={`${
          props.logo ? "loading-spinner__logo" : "loading-spinner__dual-ring"
        }`}
      >
        {props.logo && <Logo />}
      </div>
    </div>
  );
};

export default LoadingSpinner;
