// 現在、"calculator.js"しかないが複数のコンポーネントが
// ある場合に組み合わせる事を考慮

import { combineReducers } from 'redux';
import calculator from './calculator';

const reducer = combineReducers({
    calculator,
});

export default reducer;

