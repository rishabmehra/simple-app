import React from "react";
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const SelectBox = ({
    searchLabel,
    value,
    handleChange,
    options
}) => {
    const menuItems = () => {
      const menuOptions = options.map(item => {
        return (<MenuItem key={item.id} value={item.value}>{item.text}</MenuItem>)
      });
      return menuOptions;
    }
    return (
      <div>
        <InputLabel>{searchLabel}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
        >
          {menuItems()}
        </Select>
      </div>  
    )
}

SelectBox.propTypes = {
  searchLabel: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array
}

export default SelectBox