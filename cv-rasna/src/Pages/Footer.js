import React from 'react'
import { connect } from 'react-redux'

const FooterView = ({ dispatch }) => (
    <footer>
        © Rasna Bura Gohain
    </footer>
)

export default connect()(FooterView)