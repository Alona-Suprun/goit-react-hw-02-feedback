import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
  excellent,
  good,
  neutral,
  bad,
  total,
  positiveFeedbacks,
}) => {
  return total === 0 ? (
    <p className={s.text}>No feedback given</p>
  ) : (
    <ul>
      <li className={s.text}>Excellent: {excellent}</li>
      <li className={s.text}>Good: {good}</li>
      <li className={s.text}>Neutral: {neutral}</li>
      <li className={s.text}>Bad: {bad}</li>
      <li className={s.text}>Total: {total}</li>
      <li className={s.text}>Positive feedback: {positiveFeedbacks}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  excellent: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
