import React from 'react'
import { connect } from 'react-redux'
import { inputMovie, searchMovie } from './actions'

const Header = ({ inputMovie, searchMovie, errorLoading }) => {
    return (
        <div className="heading-bar">
            <div className="heycinema">
                <h3 className="header header--top">hey</h3>
                <h3 className="header header--bottom">cinema</h3>
            </div>
            <div className="searchbar">
                    <form>
                        <input onInput={inputMovie} type="search"></input>
                        <button onClick={searchMovie}>Search</button>
                    </form>
            </div>
            {errorLoading && 'Error loading movies'}
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