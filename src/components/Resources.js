import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Resources = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Icon = styled.img`
  display: block;
  margin-left: 5px;
  ${(props) => {
    switch (props.type) {
      case 'medium':
        return `
          height: 32px;
          width: 32px;
        `;
      case 'large':
        return `
          height: 48px;
          width: 48px;
        `;
      case 'normal':
        return `
          height: 19px;
          width: 19px;
        `;
      default:
        return `
          height: 16px;
          width: 16px;
        `;
    }
  }}
`;


const ResourcesComponent = ({ value, alt, src, size }) => (
  <Resources>
    <div>{value}</div>
    <Icon alt={alt} src={src} type={size} />
  </Resources>
);

ResourcesComponent.defaultProps = {
  size: '',
  alt: '',
  value: 0,
};
ResourcesComponent.propTypes = {
  value: PropTypes.number,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default ResourcesComponent;
