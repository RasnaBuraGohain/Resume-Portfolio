import React, { Component } from 'react'
import { connect } from 'react-redux'
import { match } from './router'
import Nav from 'Components/Nav'
import './App.css'
import Footer from './Pages/Footer';

class App extends Component {
  render() {

    const { route, params } = match(this.props.location.pathname)

    const Page = route.page
    return (
      <main>
        <Nav />
        <div className='App'>
          <Page {...params} />
        </div>
        <Footer />
      </main>
    )
  }
}


const mapStateToProps = state => ({
  location: state.location,
  state,
})

export default connect(mapStateToProps)(App);