import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import './MovieCards.css' 

const MovieCards = ({ relatedMovies, moviesLoading, movie }) => {
    return (
        <div>{
            !(relatedMovies.length > 0) 
            ? !moviesLoading
            ? ''
            : 'Loading...'
            : 
            <div> 
                <div className="movie-name-container">
                    <h1 className="movie-name">{movie.toUpperCase()} MOVIES</h1>
                </div>
                <ul className="movie-list">
                    {(relatedMovies.length > 0) 
                    && <MovieCard movies={relatedMovies}/>}
                </ul> 
            </div>
                }
        </div>
   )}


const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps
    )(MovieCards)