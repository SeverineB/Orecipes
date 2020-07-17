// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux
import './styles.css';

const Instructions = ({ steps }) => {
  return (
    <ol className="steps">
      {steps.map((instruction) => {
        return (
          <li key={instruction} className="step">
            {instruction}
          </li>
        );
      })}
    </ol>
  );
};

Instructions.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Instructions;
