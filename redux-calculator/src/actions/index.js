//Actionを定義


//import * as は全てをインポートする
import * as actionTypes from '../utils/actionTypes';

//数字のボタンを押した時
export const onNumClick = (Number) => ({
    type: actionTypes.INPUT_NUMBER,
    Number,
    });

//プラスボタンを押した時
export const onPlusClick = () => ({
    type:actionTypes.PLUS,
    }) ;

//マイナスボタンを押した時
export const onMinusClick = () => ({
    type:actionTypes.MINUS,
    }) ;    

//クリアボタンを押した時
export const onClearClick = () => ({
    type:actionTypes.CLEAR,
    }) ;       

//イコールボタンを押した時
export const onEqualClick = () => ({
    type:actionTypes.EQUAL,
    }) ;       

    