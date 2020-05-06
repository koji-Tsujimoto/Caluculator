
import React from 'react';
import PropTypes from 'prop-types';

const PlusBtn = ({ onClick }) => (
    <button onClick={ onClick }>+</button>
);

PlusBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PlusBtn;


//アロー関数(ブラケット[Function]やreturnを省略できる)
// const PlusBtn = () => (
//     <button>+</button>
// );

// //従来のjsのコーディング
// const PlusBtn = Function(){
//     <button>+</button>
// } ;


