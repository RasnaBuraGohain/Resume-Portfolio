import React from 'react'
import { connect } from 'react-redux'


const ContactView = ({ dispatch }) => (
    <main>
        <h1>Contact Me</h1>

        <ul>
            <li>Email : rasna@rasna.com</li>
            <li>Phone : 40000000 </li>
            <li>Address : Antwerp, Belgium</li>
        </ul>
    </main>
)

export default connect()(ContactView)