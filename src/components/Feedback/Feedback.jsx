import React from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }; 
    }

    incrementStateField = stateField => {
        this.setState({ ...this.state, [stateField]: this.state[stateField] + 1 });
    };
    
    countTotalFeedback = () => {
        const { good, bad, neutral } = this.state;
        return good + bad + neutral;
    };
    countPositiveFeedback = () => {
        return this.countTotalFeedback() > 0
            ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1) : 0
    };

    renderStatisticsSection = () => {
        if (this.countTotalFeedback() === 0) {
            return (<Notification message="There is no feedback" />)
        };
        const { good, bad, neutral } = this.state;
        return (<Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedback()}
                    />
                    </Section>)
    }

    render() {
        const options = Object.keys(this.state);
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.incrementStateField}
                    />
                </Section>
                {this.renderStatisticsSection()}
            </div>
        );
    }
}

export default Feedback;