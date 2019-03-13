import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HomeLink from './HomeLink';



const HeaderLayout = () => (
  <div>
    <AppBar position='static' color='default'>
      <Toolbar>
        <HomeLink />
      </Toolbar>
    </AppBar>
  </div>
);


export default memo(HeaderLayout);
