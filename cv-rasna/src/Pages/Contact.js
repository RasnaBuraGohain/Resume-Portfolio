import React from 'react'
import { connect } from 'react-redux'


const ContactView = ({ dispatch }) => (
    <main>
        <h1>Contact Me</h1>

        <ul>
            <li>Github</li>
            <li>LinkedIn </li>
            <li>Behance</li>
        </ul>
    </main>
)

export default connect()(ContactView)