import React, { Component } from 'react';
import logo from '../logo.svg';
import './Dashboard.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardAction from '../actions/dashboardAction';
import ProjectDetails from '../components/ProjectDetails';
import Input from '../components/common/Input';

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

  handleSearch(e){
    console.log(e.target.value);
    this.setState({ projectID : e.target.value})
  }

  componentDidMount(){
    this.props.action.getProjectDetails();
  }

  resetProjectDetails(){
    this.props.action.getProjectDetails();
    this.setState({ projectID : ''})
  }

  getSearchDetails(){
    const { projectID } = this.state;
    this.props.action.getSearchDetails(projectID);
  }
  
  render() {
    const { projectList } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Input type="text" placeholder="Search Book" onChange={this.handleSearch} />
          <button onClick={this.getSearchDetails}>Search</button>
          <button onClick={this.resetProjectDetails}>Reset</button>
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
  console.log('+++', state);
  return {
    projectList : state.dashboardReducer.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    action : bindActionCreators(dashboardAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
