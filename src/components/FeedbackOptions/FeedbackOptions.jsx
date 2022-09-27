import React from 'react';
import Button  from 'components/Button/Button';
import styles from './FeedbackOptions.module.css';
import goodImg from '../../images/good.png';
import neutralImg from '../../images/neutral.png';
import badImg from '../../images/bad.png';
import PropTypes from 'prop-types';

class FeedbackOptions extends React.Component {
    
    render() {
        const {btnWrapper} = styles;
        const { options, onLeaveFeedback } = this.props;
        return (
            <>
                <div className={btnWrapper}>
                    <Button
                        title={options[0]}
                        img={goodImg}
                        onClick={() => {
                            console.log('good')
                            onLeaveFeedback(options[0]);
                        }}
                    >
                    </Button>
                    <Button
                        title={options[1]}
                        img={neutralImg}
                        onClick={() => {
                            console.log('neutral')
                            onLeaveFeedback(options[1]);
                        }}
                    >
                    </Button>
                    <Button
                        title={options[2]}
                        img={badImg}
                        onClick={() => {
                            console.log('bad')
                            onLeaveFeedback(options[2]);
                        }}
                    >
                    </Button>
                </div>
            </>
        );
    }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
