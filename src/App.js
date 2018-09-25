import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardAction from './actions/dashboardAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  console.log('+++', state);
  return {}
}

function mapDispatchToProps(dispatch){
  return {
    action : bindActionCreators(dashboardAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
