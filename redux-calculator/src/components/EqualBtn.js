
import React from 'react';
import PropTypes from 'prop-types';
import '../components.css';

const EqualBtn = ({ onClick }) => (
    <button className="stateButtonStyle"
    onClick={ onClick }>=</button>
);

EqualBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default EqualBtn;



