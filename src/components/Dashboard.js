import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ResourcesBar from '../containers/Resources-bar';
import Stats from '../containers/Stats';
import Logout from '../containers/Logout';
import Arena from '../containers/Arena';

const Dashboard = ({ match }) => {
  const arena = `${match.path}/arena`;
  const routes = [{
    title: 'Arena',
    path: `${match.path}/arena`,
  }, {
    title: 'Equipment',
    path: `${match.path}/equipment`,
  }, {
    title: 'Chests',
    path: `${match.path}/chest`,
  }, {
    title: 'Shop',
    path: `${match.path}/shop`,
  }, {
    title: 'Hall of fame',
    path: `${match.path}/hall-of-fame`,
  }];
  return (
    <div>
      <ResourcesBar />
      <Stats />
      <Switch>
        <Route path={arena} component={Arena} />
      </Switch>
      <ul>
        {routes.map((item, key) => (
          <li key={key}><Link to={item.path}>{item.title}</Link></li>
        ))}
        <li><Logout>Logout</Logout></li>
      </ul>
    </div>
  );
};

Dashboard.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Dashboard;
