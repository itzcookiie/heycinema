import React from 'react'
import { connect } from 'react-redux'

const MovieCards = ({ relatedMovies, moviesLoaded, movie }) => {
    return (
        <div>
            <h1>{movie.toUpperCase()} MOVIES</h1>
                <ul>{
                (moviesLoaded && relatedMovies.length > 0) 
                    && relatedMovies.map((movie,index) => (
                    <div key={index}>
                        <li>
                            <h2>Movie: {movie.Title}</h2>
                            <h3>Rating: {movie.Ratings.map((rating, index) => (
                                    <p key={index}>{rating.Source}: {rating.Value}</p>
                            ))}
                            <p>IMDBrating: {movie.imdbRating}</p>
                            </h3>
                            <h3>Year of release: {movie.Released}</h3>
                            <img onError={(error) => {
                                error.target.src="https://www.nationalpetregister.org/assets/img/no-photo.jpg"
                            }} src={movie.Poster} alt="Cover of the movie" />
                            </li>
                    </div>
                ))}</ul> 
        </div>
   )}


const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps
    )(MovieCards)