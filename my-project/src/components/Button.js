import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ label }) => {
  return (
    <Button variant="contained" color="primary">
      {label}
    </Button>
  );
};

export default CustomButton;
