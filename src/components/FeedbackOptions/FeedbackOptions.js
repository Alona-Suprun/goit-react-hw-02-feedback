import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.optionList}>
    {options.map(option => (
      <li key={option} className={s.item}>
        <button
          type="button"
          className={s.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  option: PropTypes.string,
};

export default FeedbackOptions;
