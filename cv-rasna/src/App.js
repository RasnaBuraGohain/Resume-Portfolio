import React, { Component } from 'react'
import { connect } from 'react-redux'
import { match } from './router'
import Nav from 'Components/Nav'
import './App.css'
import Footer from './Pages/Footer';
//import Cursor from 'Cursor/Cursor'

class App extends Component {
  render() {

    const { route, params } = match(this.props.location.pathname)

    const Page = route.page
    return (
      <div>
        <Nav />
        <div className='App'>
          <Page {...params} />
        </div>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  location: state.location,
  state,
})

export default connect(mapStateToProps)(App);