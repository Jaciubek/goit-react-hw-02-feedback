import React from 'react';

class FeedbackOptions extends React.Component {
    

    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <>
                <div style={{ display: 'flex' }}>
                    <button
                        onClick={() => {
                            console.log('good')
                            onLeaveFeedback(options[0]);
                        }}
                    >
                        Good
                    </button>
                    <button
                        onClick={() => {
                            console.log('neutral')
                            onLeaveFeedback(options[1]);
                        }}
                    >
                        Neutral
                    </button>
                    <button
                        onClick={() => {
                            console.log('bad')
                            onLeaveFeedback(options[2]);
                        }}
                    >
                        Bad
                    </button>
                </div>
            </>
        );
    }
}

export default FeedbackOptions;