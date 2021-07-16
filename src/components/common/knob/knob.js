import React from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Knob = ({
    onClickHandler,
    text,
    disabled,
}) => {
    return (
       <Button variant="contained" disabled={disabled} onClick={onClickHandler}>{text}</Button>
    )
}

Knob.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired
}

export default Knob