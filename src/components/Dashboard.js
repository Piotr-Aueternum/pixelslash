import React from 'react';
import ResourcesBar from '../containers/Resources-bar';
import Stats from '../containers/Stats';
import Logout from '../containers/Logout';

export default () => (
  <div>
    <ResourcesBar />
    <Stats />
    <Logout>Logout</Logout>
  </div>
);
