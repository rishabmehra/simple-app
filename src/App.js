import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardAction from './actions/dashboardAction';

class App extends Component {
  constructor(props){
    super(props);
  }
  getProjectDetails(){
    console.log('in getProjectDetails');
    this.props.action.getProjectDetails();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={()=>this.getProjectDetails()}>Test API calls</button>
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
