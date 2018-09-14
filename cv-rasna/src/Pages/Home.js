import React from 'react'
import { SocialIcon } from 'react-social-icons';

const HomeView = () => (
    <main>
        <div className="home">
            <h1>Rasna Bura Gohain</h1>
            <p>Front-End Developer | Graphic Designer | Fashion designer | Stylist</p>
            <div className="socialicons">
                <SocialIcon url="https://linkedin.com/in/rasnaburagohain/" />
                <SocialIcon url="https://github.com/RasnaBuraGohain" />
                <SocialIcon url="https://behance.net/rasnaburagohain" />
            </div>
        </div >
    </main >
)

export default HomeView