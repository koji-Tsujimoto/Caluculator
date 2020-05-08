import React from 'react';
import PropTypes from 'prop-types';
import '../components.css';

const ClearBtn = ({ onClick }) =>(
    <button className="stateButtonStyle" 
    onClick={ onClick }>CA</button>
)

ClearBtn.propTypes = {
    onClick:PropTypes.func.isRequired,
};


export default ClearBtn;