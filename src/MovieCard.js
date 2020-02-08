import React from 'react'

const MovieCard = ({ movies }) => {
    return (
        <div className="movie-cards">
            {movies.map((movie,index) => (
                    <div key={index} className="movie-card-container">
                        <div >
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">{movie.Title}</th>
                                </tr>
                            </thead>
                            <tbody>
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
                        </div>
                            <img onError={(error) => {
                                error.target.src="https://www.nationalpetregister.org/assets/img/no-photo.jpg"
                            }} src={movie.Poster} alt="Cover of the movie" />
                    </div>)
            )}
        </div>
    )
}

export default MovieCard