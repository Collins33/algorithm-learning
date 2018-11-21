import React, { Component } from 'react'; 
import Navigation from '../../components/Navigation/Navigation'
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    const {name,email} = this.props
    console.log(name, email)
    return (
      <div className="App">
        <Navigation />
        <h1>carpool</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    name: state.testsReducer.name,
    email: state.testsReducer.email
});

export default connect(mapStateToProps)(App);
