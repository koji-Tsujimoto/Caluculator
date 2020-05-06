//Actionを定義


//import * as は全てをインポートする
import * as actionTypes from '../utils/actionTypes';

//数字のボタンを押した時
export const onNumClick = (number) => ({
    type: actionTypes.INPUT_NUMBER,
    number,
    });

//プラスボタンを押した時
export const onPlusClick = () => ({
    type:actionTypes.PLUS,
    }) ;


