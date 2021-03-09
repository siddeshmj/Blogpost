import actionTypes from '../actionTypes';

const initialState = {
    posts: []
}

const posts = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_POST: {
            const posts = [...state.posts];
            posts.push(action.post);
            return{
                posts,
            }
        }
        default:
            return state;
    }
}

export default posts;