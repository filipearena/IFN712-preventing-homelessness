import * as types from './types';

export function showLoading() {
    return {
        type: types.LOAD_TRUE
    }
}

export function hideLoading() {
    return (dispatch, getState) => {
        dispatch({
            type: types.LOAD_FALSE
        })
    }
}