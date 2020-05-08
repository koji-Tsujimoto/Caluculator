
import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    inputValue: 0,
    resultValue: 0,
    actionTypeNo:0,
    showingResult: false,
};

const calculator = (state = initialAppState, action) => {
    if (action.type === actionTypes.INPUT_NUMBER) {
        return {
        ...state,
        inputValue: state.inputValue * 10 + action.Number,
        actionTypeNo:state.actionTypeNo,
        showingResult: false,
    };
    } else if (action.type === actionTypes.PLUS) {
    return {
        ...state,
        inputValue: 0,
        resultValue: state.resultValue + state.inputValue,
        actionTypeNo:1,
        showingResult: true,
    };
    } else if (action.type === actionTypes.MINUS) {
    return {
        ...state,
        inputValue: 0,
        resultValue: (state.resultValue) - (state.inputValue),
        actionTypeNo:2,
        showingResult: true,
    };
    } else if (action.type === actionTypes.CLEAR) {
    return {
        ...state,
        inputValue: 0,
        resultValue: 0,
        actionTypeNo:0,
        showingResult: true,
    };
} else if (action.type === actionTypes.EQUAL) {
    return calcValue(state,state.actionTypeNo)
    // return {
    //     ...state,
    //     inputValue: 0,    
    //     resultValue: 0,
    //     actionTypeNo:0,
    //     showingResult: true,
    // };

    } else {
    return state;
    }
};

//イコールボタンの場合、reducer側で再度分岐が必要
export const calcValue = (model,value) => {
    switch (value) {
        case 1:
            return {
                ...model,
                inputValue: 0,    
                resultValue: model.resultValue + model.inputValue,
                actionTypeNo:0,
                showingResult: true,
                };   
        case 2:
            return {
                ...model,
                inputValue: 0,    
                resultValue: model.resultValue - model.inputValue,
                actionTypeNo:0,
                showingResult: true,
                }; 
        default:
            return model;
    }

}


export default calculator;

