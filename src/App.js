import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardAction from './actions/dashboardAction';
import ProjectDetails from './components/ProjectDetails';
import Input from './components/common/Input';

class App extends Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchProjectItem : ''
    }
  }

  handleSearch(e){
    console.log(e.target.value);
    this.setState({ searchProjectItem : e.target.value})
  }

  componentDidMount(){
    this.props.action.getProjectDetails();
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
          <button onClick={()=>this.getProjectDetails()}>Search</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
