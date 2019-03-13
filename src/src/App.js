import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/HeaderLayout';
import Users from './containers/Users';


const App = () => (
  < >
    <Header />
    <Route exact path={`${process.env.PUBLIC_URL}/:page?`} component={Users} />
  </>
);

export default App;
