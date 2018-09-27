import React, { Component } from 'react';
import logo from '../logo.svg';
import './Dashboard.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardAction from '../actions/dashboardAction';
import ProjectDetails from '../components/ProjectDetails';
import Input from '../components/common/Input';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.getSearchDetails = this.getSearchDetails.bind(this);
    this.resetProjectDetails = this.resetProjectDetails.bind(this);
    this.state = {
      projectID : ''
    }
  }
/*
* handleSearch to get the project Id
*/
  handleSearch(e){
    this.setState({ projectID : e.target.value})
  }

/*
* will load the project details from API
*/
  componentDidMount(){
    this.props.action.getProjectDetails();
  }
/*
* Reset the component and call the project details API
*/
  resetProjectDetails(){
    this.props.action.getProjectDetails();
    this.setState({ projectID : ''})
  }
/*
* call the search details action w.r.t projectID
*/
  getSearchDetails(){
    const { projectID } = this.state;
    this.props.action.getSearchDetails(projectID);
  }
  
  render() {
    const { projectList } = this.props;
    const { isAuthenticated } = this.props.isLogin;
    if(!isAuthenticated){
      return <Redirect to='/login' />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Simple Application</h1>
        </header>
        <p className="App-intro">
          <Input type="text" className="dashboard-input" placeholder="Please enter project id" onChange={this.handleSearch} />
          <button onClick={this.getSearchDetails} className="dashboard-search-button">Search</button>
          <button onClick={this.resetProjectDetails} className="dashboard-reset-button">Reset</button>
        </p>
        {
          projectList.map((item,index) => {
            return(
              <ProjectDetails data={item} key={index}/>
            )
          })
        }
       
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    projectList : state.dashboardReducer.list,
    isLogin : state.loginReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    action : bindActionCreators(dashboardAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);