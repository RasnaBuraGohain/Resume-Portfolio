import React from 'react'
import { connect } from 'react-redux'

const ProfileView = () => (
    <div className='profile'>
        <h1>Hello there, I'm Rasna </h1>
        <p>With the core interest in Graphic Designing I recently completed a Front-End
            Development course at Intec-Brussel. A creative and ambitious person with
            Bachelors’ Degree in Fashion from India and Advanced Diploma in Fashion
            from New Zealand.
            <br />
            An experienced creative professional with extensive management skills and
            developed a responsible approach to any task that I undertake.
            Always eager to learn and overcome any challenges.
            Seeking a membership in a motivational organization, to prove my progress in
            the areas entrusted to me and always waiting to secure challenging issues.</p>
    </div>
)

export default connect()(ProfileView)