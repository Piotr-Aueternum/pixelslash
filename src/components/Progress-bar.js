import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Progress = styled.div`
  margin: 5px 0;
`;

const Bar = styled.div`
  width: 100%;
  height: 25px;
  border: 3px solid #4c4d4f;
  background: #6a6d72;
  box-sizing: border-box;
`;

const Fill = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${props => props.theme.background};
  border-top: 3px solid ${props => props.theme.gloss};
  outline: 3px solid ${props => props.theme.border};
`;

const Progressbar = ({ progress, theme, children }) => {
  if (progress < 0 || progress > 100) {
    throw Error(`Invalid progress value(${progress}) it should be from 0 to 100!`);
  }
  return (
    <Progress>
      {children}
      <Bar>
        <Fill
          theme={theme}
          style={{ width: `${progress}%` }}
        />
      </Bar>
    </Progress>
  );
};


Progressbar.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Progressbar;
