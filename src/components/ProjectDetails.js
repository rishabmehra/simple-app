import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class ProjectDetails extends Component {
    constructor(props){
        super(props);
      }
      render(){
          const { title, companyname ,number} = this.props.data;
          return(
          <div className="projectContainer">
            <div className="titleConatiner">
              <label>Title:</label>
              <span>{title}</span>
            </div>
          <div>
              <label>Company:</label>
              <span>{companyname}</span>
            </div>
          <div>
              <label>Number:</label>
              <span>{number}</span>
            </div>
          </div>   
          )
      }
}

ProjectDetails.propTypes = {
  data: PropTypes.object
}

ProjectDetails.defaultProps = {
  data : {}
}
export default ProjectDetails;