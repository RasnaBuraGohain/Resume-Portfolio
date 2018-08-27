import React from 'react'
import { connect } from 'react-redux'
import Link from 'Components/Link'


const Nav = ({ dispatch }) => {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

        </nav>
    )
}

const mapStateToProps = state => ({
    location: state.location,
    state,
})

export default connect(mapStateToProps)(Nav)