import types from '../types'
const apiKey = 'd5848284'
// const stateTree = {
//     movie: '',
//     moviesLoaded: null,
//     errorLoading: null,
//     relatedMovies: [],
// }

export const inputMovie = event => (dispatch, getState) => {
    dispatch({ type: types.INPUTTING_MOVIE })
    return dispatch({
        type: types.INPUT_MOVIE,
        payload: {
            movie: event.target.value
        }
    })
}

export const searchMovie = event => (dispatch, getState) => {
    event.preventDefault();
    const { movie } = getState()
    dispatch({ 
        type: types.SEARCHING_MOVIE,
        payload: {
            moviesLoading: true
        }
     })
     dispatch({ type: types.FIRST_REQUEST })
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`)
    .then(r => r.json())
    .then(allMovies => {
        dispatch({ type: types.FIRST_REQUEST_SUCCESS })
        dispatch({ type: types.SECOND_REQUEST })
        const allMoviesToSearch = allMovies.Search 
        Promise.all(allMoviesToSearch.map(relevantMovie => {
            return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${relevantMovie.imdbID}`)
            .then(r => r.json())
        }))
        .then(relatedMovies => {
                dispatch({ 
                    type: types.SECOND_REQUEST_SUCCESS,
                    payload: {
                        moviesLoading: false,
                        moviesLoaded: true,
                        relatedMovies
                    }
                 })
            })
            .catch(errorLoading => {
                dispatch({ 
                    type: types.REQUEST_FAILED,
                    payload: {
                        errorLoading
                    } 
                })
            })
        })
        .catch(errorLoading => {
            dispatch({ 
                type: types.REQUEST_FAILED,
                payload: {
                    errorLoading
                } 
            })
        })
}