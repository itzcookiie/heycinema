import types from '../types'

export default (state = {moviesLoading: false, errorLoading: false, moviesLoaded: false, relatedMovies: []}, { type, payload }) => {
    switch(type) {
        case types.INPUT_MOVIE:
            return {
                ...state,
                ...payload
            }
        case types.SEARCH_MOVIE:
            return {
                ...state,
                ...payload
            }
        case types.SEARCHING_MOVIE:
            return {
                ...state,
                ...payload
            }
        case types.SECOND_REQUEST_SUCCESS:
            return {
                ...state,
                ...payload
            }
        case types.REQUEST_FAILED:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}