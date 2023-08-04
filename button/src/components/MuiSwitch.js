import React, { useState } from 'react';
import { Box, FormControlLabel, Switch, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  label: {
    width: 80, // Define a largura da label
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8, // Define o arredondamento dos cantos da label
    background: '#E0E0E0', // Define a cor de fundo da label
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    '&:hover': {
      background: '#ccc', // Cor de fundo ao passar o mouse
    },
  },
  switchRoot: {
    width: 32, // Define a largura do Switch (pode ajustar conforme necessário)
    height: 32, // Define a altura do Switch (pode ajustar conforme necessário)
    padding: 0,
  },
  thumb: {
    width: 28, // Define a largura do círculo interno do Switch (pode ajustar conforme necessário)
    height: 28, // Define a altura do círculo interno do Switch (pode ajustar conforme necessário)
  },
}));

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        classes={{ label: classes.label }}
        control={
          <Switch
            classes={{
              root: classes.switchRoot,
              thumb: classes.thumb,
            }}
            checked={checked}
            onChange={handleChange}
          />
        }
        label="Dark Mode"
      />
    </Box>
  );
};

export default MuiSwitch
