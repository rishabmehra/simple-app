import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    
    render(){
        const {type, placeholder, onChange} = this.props;
        return(
            <input
             type={type}
             onChange={onChange}
             placeholder={placeholder}
             />
        );
    }
}
Input.propTypes = {
    type: PropTypes.string,
    placeholder : PropTypes.string,
    onChange : PropTypes.func
}

Input.defaultProps = {
    type : 'text',
    placeholder : 'Type here'  
}
export default Input