import React from 'react';
import { Link } from 'react-router-dom';
import ResourcesBar from '../containers/Resources-bar';
import Stats from '../containers/Stats';

export default () => (
  <div>
    <ResourcesBar />
    <Stats />
    <Link to="/">Logout</Link>
  </div>
);
