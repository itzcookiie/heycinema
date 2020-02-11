import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import MovieCards from './MovieCards'
import './App.css'

const App = ({ relatedMovies, moviesLoading }) => {
    return (
        <div>
            <Header />
            {
            !(relatedMovies.length > 0)
            ? !moviesLoading 
            ? '' 
            : 'Loading...' 
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