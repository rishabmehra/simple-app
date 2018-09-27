import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    
    render(){
        const {type, placeholder, onChange, className} = this.props;
        return(
            <input
             type={type}
             onChange={onChange}
             placeholder={placeholder}
             className={className}
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
    placeholder : 'Type here',
    className : ''  
}
export default Input