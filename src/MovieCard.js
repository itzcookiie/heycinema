import React from 'react'
import imageNotFound from './image-not-found.png'

const MovieCard = ({ movies }) => {
    return (
        <div className="movie-cards">
            {movies.map((movie,index) => (
                    <div key={index} className="movie-card-container">
                        <table>
                            <thead>
                                <tr>
                                    <th className="table-header" colSpan="2">{movie.Title}</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                <tr>
                                    <td>Rating</td>
                                    <td>
                                    {movie.Ratings.map((rating, index) => (
                                    <p key={index}>{rating.Source}: {rating.Value}</p>
                            ))}
                                <p>IMDBrating: {movie.imdbRating}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Year of release</td>
                                    <td>{movie.Released}</td>
                                </tr>
                            </tbody>
                        </table>
                            <img onError={(error) => {
                                error.target.src=`http://localhost:3000/dist/${imageNotFound}`
                                // error = null
                            }} src={movie.Poster} alt="Cover of the movie" />
                    </div>)
            )}
        </div>
    )
}

export default MovieCard