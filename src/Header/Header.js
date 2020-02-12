import React from 'react'
import { connect } from 'react-redux'
import { inputMovie, searchMovie } from '../actions'
import './Header.css'

const Header = ({ inputMovie, searchMovie, relatedMovies, moviesLoading, errorLoading }) => {
    return (
        <div className="heading-bar">
            <div className="heycinema">
                <h3 className="header header--top">hey</h3>
                <h3 className="header header--bottom">cinema</h3>
            </div>
            <div className="searchbar">
                    <form className="form">
                        <input placeholder="search a movie" size="50" onInput={inputMovie} type="search"></input>
                        <button onClick={searchMovie}>Search</button>
                        { 
                        !moviesLoading
                        ? !(relatedMovies.length > 0 || errorLoading)
                        ? <div className="example">
                        <p>Type in a movie above (can be uppercase or lowercase)</p>
                        <h3>Examples</h3>
                        <ul className="example-list">
                            <li>Jumanji</li>
                            <li>starwars</li>
                            <li>Sonic the hedgehog</li>
                        </ul>
                        </div>
                        : ''
                        : ''
                        }
                    </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps,
    { inputMovie, searchMovie }
    )(Header)