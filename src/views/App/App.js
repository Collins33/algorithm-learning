import React, { Component } from 'react'; 
import Navigation from '../../components/Navigation/Navigation'
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    const {name,email} = this.props
    console.log(name)
    return (
      <div className="App">
        <Navigation />

        <h1>carpool</h1>
      </div>
    );
  }
}

const mapStateToProps = ({name, email})=>({
  ...name,
  ...email
})

export default connect(mapStateToProps)(App);
