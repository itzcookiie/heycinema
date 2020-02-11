import React from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

const MovieCards = ({ relatedMovies, moviesLoaded, movie }) => {
    return (
        <div>
            <h1 className="movie-name">{movie.toUpperCase()} MOVIES</h1>
                <ul className="movie-list">{
                (moviesLoaded && relatedMovies.length > 0) 
                    && <MovieCard movies={relatedMovies}/>}</ul> 
        </div>
   )}


const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps
    )(MovieCards)