import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const StyledSlider = withStyles({
  root: {
    color: '#fff',
    height: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    display:'none',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4e34e1',
  },
  mark: {
    backgroundColor: '#fff',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: '#fff',
  },
  markLabel: {
    display: 'none',
  },
})(Slider);

export default function RangeSlider() {
  const [value, setValue] = React.useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: 0,
    },
    {
      value: 25,
    },
    {
      value: 50,
    },
    {
      value: 75,
    },
    {
      value: 100,
    },
  ];

  return (
    <StyledSlider
      value={value}
      onChange={handleChange}
      min={0}
      max={100}
      valueLabelDisplay="off"
    />
  );
}
