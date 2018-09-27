import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../containers/Dashboard.css';
import { getDate, removeHtmlTags } from '../utils/utils';

class ProjectDetails extends Component {
    constructor(props){
        super(props);
      }
      render(){
          const { id,title,number,priority, startdate,projecttimeallocated, duedate, description} = this.props.data;
          return(
          <div className="project-container">
          <div>
              <label className="project-label">ID:</label>
              <span className="project-text">{id}</span>
            </div>
            <div>
              <label className="project-label">Project Title:</label>
              <span className="project-text">{title}</span>
            </div>
           
            <div>
                <label className="project-label">Project Number:</label>
                <span className="project-text">{number}</span>
            </div>
            <div>
                <label className="project-label">Company:</label>
                <span className="project-text">{title}</span>
            </div>
            <div>
                <label className="project-label">Start Date/Due Date</label>
                <span className="project-text">{getDate(startdate)} / {getDate(duedate)}</span>
            </div>
            <div>
                <label className="project-label">Priority:</label>
                <span className="project-text">{priority}</span>
            </div>
            <div>
                <label className="project-label">Project Allocated Time:</label>
                <span className="project-text">{projecttimeallocated}</span>
            </div>
            {}<div>
                <label className="project-label">Description:</label>
                <span className="project-text">{removeHtmlTags(description)}</span>
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