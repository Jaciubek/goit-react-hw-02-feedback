import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';
class Section extends React.Component {
    

    render() {
        const {headHead} = styles
        const { title, children } = this.props;
        return (
            <section>
                <h3 className={headHead}>{title}</h3>
                {children}
            </section>
        );
    }
}
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};