import React, { Component } from 'react';
import './login.css';
import Input from '../components/common/Input';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginAction from '../actions/loginAction';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      apiKey : ''
    }
  }

  submitLoginDetails(){
    const { apiKey } = this.state;
    this.props.actions.getLogin(apiKey);
  }
  
  onChangeHandler(e){
    this.setState({apiKey : e.target.value });
  }
  render() {
    const { isAuthenticated, isErrorMessage } = this.props.isLogin;
    if(isAuthenticated){
      return <Redirect to='/dashboard' />;
    }
    return (
      <div className="App">
          <div className="login">
             <h1 className="login-title">Simple Login</h1>
             <Input type="text" className="login-input" placeholder="Please enter API key" onChange={this.onChangeHandler} />
             { isErrorMessage ? (<div className="login-error-message">Please provide valid API key</div>) : ''}
             <button className="login-button" onClick={()=>this.submitLoginDetails()}> Submit </button>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    isLogin : state.loginReducer
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(loginAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
