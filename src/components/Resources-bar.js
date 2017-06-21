import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Resources from './Resources';

const ResourcesBar = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  padding: 5px;
`;

const ResourcesBarComponent = ({ data }) => {
  if (data.length < 1) {
    return (<div>No resources</div>);
  }
  return (
    <ResourcesBar>
      {data.map((item, key) => (
        <Resources
          key={key}
          {...item}
        />
      ))}
    </ResourcesBar>
  );
};

ResourcesBarComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResourcesBarComponent;
