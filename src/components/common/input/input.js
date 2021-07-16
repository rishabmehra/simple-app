import React from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Input = ({
    label,
    value,
    onChangeHandler
}) => {
    return (
        <TextField
         label={label}
         value={value}
         onChange={onChangeHandler}
        />
    )
}

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired
}

export default Input;