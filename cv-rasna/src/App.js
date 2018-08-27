import React, { Component } from 'react'
import { connect } from 'react-redux'
import { match } from './router'
import Nav from 'Components/Nav'
import './App.css'

class App extends Component {
  render() {

    const { route, params } = match(this.props.location.pathname)

    const Page = route.page
    return (
      <main>
        <Nav />
        <hr />
        <div className='App'>
          <Page {...params} />
          <hr />
        </div>
      </main>
    )
  }
}


const mapStateToProps = state => ({
  location: state.location,
  state,
})

export default connect(mapStateToProps)(App);