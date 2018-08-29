import React from 'react'
import rasna from './rasna.jpg'

const HomeView = () => (
    <main>
        <h1>Hello there, I'm Rasna </h1>
        <div className="profile">
            <img src={rasna} alt="welcome" ></img>

            <p>With the core interest in <b>Graphic Designing</b> I recently completed a Front-End
            Development course at Intec-Brussel.
                A creative and ambitious person with a <b>Bachelors’ Degree</b> in Fashion from India and <b>Advanced Diploma</b> in Fashion
                from New Zealand.
            <br />
                An experienced creative professional with extensive management skills and
            developed a responsible approach to any task that I undertake.
                Always eager to learn and overcome any challenges.
                Seeking a membership in a motivational organization, to prove my progress in
            the areas entrusted to me and always waiting to secure challenging issues.</p>
        </div>

    </main>
)

export default HomeView