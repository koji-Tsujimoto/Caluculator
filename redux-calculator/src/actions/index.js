//Actionを定義


//import * as は全てをインポートする
import * as actionTypes from '../utils/actionTypes';

//数字をボタンを押した時
export const onNumClick = (Number) => ({
    type: actionTypes.INPUT_NUMBER,
    Number,
    });

//プラスボタンを押した時
export const onPlusClick = () => ({
    type:actionTypes.PLUS,
    }) ;


