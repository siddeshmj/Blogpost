import actionTypes from '../actionTypes';

const ia = {
    setInputTitle: title => ({
        type: actionTypes.SET_INPUT_TITLE,
        title,
    }),
    setInputContent: content => ({
        type: actionTypes.SET_INPUT_CONTENT,
        content
    })
}

export default ia;