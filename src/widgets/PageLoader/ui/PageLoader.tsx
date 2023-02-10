import React from 'react';

import classes from './PageLoader.module.scss';

export const PageLoader = () => (
  <div className={classes['page-loader']}>
    <div className={classes['lds-ripple']}>
      <div />
      <div />
    </div>
  </div>
);
