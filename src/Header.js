import React from 'react'
import { connect } from 'react-redux'
import { inputMovie, searchMovie } from './actions'

const Header = ({ inputMovie, searchMovie, errorLoading }) => {
    return (
        <div>
            <h1>Header</h1>
            <div>
                <h3 className="header header--top">hey</h3>
                <h3 className="header header--bottom">cinema</h3>
            </div>
            <form>
                <input onInput={inputMovie} type="search"></input>
                <button onClick={searchMovie}>Search</button>
            </form>
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