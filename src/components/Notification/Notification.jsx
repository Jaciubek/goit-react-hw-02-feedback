import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

class Notification extends React.Component {
    
    render() {
        const { message } = this.props;
        const { notif__message } = styles;
        return (
            <>
                <p className={notif__message}>{message || ''}</p>
            </>
        );
    }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};