import React from 'react';

class Section extends React.Component {
    

    render() {
        const { title, children } = this.props;
        return (
            <>
                <h3>{title}</h3>
                {children}
            </>
        );
    }
}

export default Section;