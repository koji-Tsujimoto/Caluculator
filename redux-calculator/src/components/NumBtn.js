//やりたい事
//押したボタンの数字を保持

import React from 'react';
import PropTypes from 'prop-types';

const NumBtn = ({n, onClick}) => (
    <button onClick={onClick}>{n}</button>
);

NumBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default NumBtn;

