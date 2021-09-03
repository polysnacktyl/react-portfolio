import { createContext } from 'react';

export const Context = createContext();

export const initialState = {
    errors: null,
    loading: true,
    posts: [],
    post: ''
}

export const Reducer = (state, action) => {
    switch (action.type) {
        case 'setPosts':
            return {
                ...state,
                posts: action.payload
            };
        case 'thisPost':
            return {
                ...state,
                post: action.payload
            };

        case 'fail':
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    };
};

export default Reducer;
