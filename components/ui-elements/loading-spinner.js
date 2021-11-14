import React from 'react';

import classes from  './LoadingSpinner.module.css';

const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && classes.loadingSpinnerOverlay}`}>
      <div className={classes.ldsDualRing}></div>
    </div>
  );
};

export default LoadingSpinner;