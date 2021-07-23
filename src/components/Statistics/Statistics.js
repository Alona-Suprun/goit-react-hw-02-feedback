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
    <>
      <p className={s.text}>Excellent: {excellent}</p>
      <p className={s.text}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral}</p>
      <p className={s.text}>Bad: {bad}</p>
      <p className={s.text}>Total: {total}</p>
      <p className={s.text}>Positive feedback: {positiveFeedbacks}%</p>
    </>
  );
};

Statistics.propTypes = {
  calculations: PropTypes.arrayOf(PropTypes.string),
  calculation: PropTypes.number,
};

export default Statistics;
