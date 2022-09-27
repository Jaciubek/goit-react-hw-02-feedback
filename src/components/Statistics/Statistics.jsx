import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import React from 'react';

class Statistics extends React.Component {
    render() {
        const { stat__wrap, stat__lab, stat__val, stat__txt } = styles;
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div className={stat__wrap}>
                <p className={stat__txt}>
                    <span className={stat__lab}>Good: </span>
                    <span className={stat__val}>{good}</span>
                </p>
                <p className={stat__txt}>
                    <span className={stat__lab}>Neutral: </span>
                    <span className={stat__val}>{neutral}</span>
                </p>
                <p className={stat__txt}>
                    <span className={stat__lab}>Bad: </span>
                    <span className={stat__val}>{bad}</span>
                </p>
                <p className={stat__txt}>
                    <span className={stat__lab}>Total: </span>
                    <span className={stat__val}>{total}</span>
                </p>
                <p className={stat__txt}>
                    <span className={stat__lab}>Positive feedback: </span>
                    <span className={stat__val}>{positivePercentage}%</span>
                </p>
            </div>
        );
    }
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};
export default Statistics;