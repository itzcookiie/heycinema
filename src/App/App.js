import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import MovieCards from '../MovieCards/MovieCards'
import './App.css'

const App = ({ relatedMovies, errorLoading, moviesLoaded }) => {
    return (
        <div>
            <Header />
            {
            errorLoading
            ? 
            <div className="error-title">
                <h2>Movie not found. Please enter another movie</h2>
            </div>
            : <MovieCards />}
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps
)(App)