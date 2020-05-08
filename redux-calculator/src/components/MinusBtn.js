
import React from 'react';
import PropTypes from 'prop-types';
import '../components.css';


const MinusBtn = ({ onClick }) => (
    <button className="stateButtonStyle" 
    onClick={ onClick }>-</button>
);

MinusBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default MinusBtn;


//アロー関数(ブラケット[Function]やreturnを省略できる)
// const PlusBtn = () => (
//     <button>+</button>
// );

// //従来のjsのコーディング
// const PlusBtn = Function(){
//     <button>+</button>
// } ;