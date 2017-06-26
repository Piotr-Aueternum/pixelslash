import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  &>li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const Navigation = ({ data }) => (
  <nav>
    <LinkList>
      {data.map((item, key) => (
        <li key={key}>
          <StyledNavLink to={item.path}>{item.title}</StyledNavLink>
        </li>
      ))}
    </LinkList>
  </nav>
);

Navigation.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navigation;
