import actionTypes from '../actionTypes';

const initialState = {
    title: '',
    content: '',
}

const inputs = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT_TITLE: {
            const { title } = action;
            return{
                ...state,
                title
            }
        }

        case actionTypes.SET_INPUT_CONTENT: {
            const { content } = action;
            return {
                ...state,
                content,
            }
        }

        case actionTypes.RESET_INPUT: {
            return initialState;
        }
        default: 
        return state;
    }
}

export default inputs;