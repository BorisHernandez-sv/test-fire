import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import {withStyles,makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { useForm } from '../../hooks/useForm'

const primaryColor = '#f07'
const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: primaryColor,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: primaryColor,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: primaryColor,
        },
        '&:hover fieldset': {
          borderColor: primaryColor,
        },
        '&.Mui-focused fieldset': {
          borderColor: primaryColor,
        },
      },
    },
  })(TextField);

  const CssFormControl = withStyles({
    root: {
      '& label.Mui-focused': {
        color: primaryColor,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: primaryColor,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: primaryColor,
        },
        '&:hover fieldset': {
          borderColor: primaryColor,
        },
        '&.Mui-focused fieldset': {
          borderColor: primaryColor,
        },
      },
    },
  })(FormControl);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
  }));


export const Review = () => {

    const classes = useStyles();
    const [ formValues, handleInputChange ] = useForm({
      fullName:'',
      dedication:'',
      address:'',
      city:'',
      state:'',
      phoneNumber:'',
  });

  const { fullName, dedication, address, city} = formValues;


    return (
        <>
          <div className="review__form">
            <CssTextField
            autoComplete='new-password'
            name="fullName"
            value={ fullName }
            className="review__textfield-name"
            label="Tu correo "
            variant="outlined"
            onChange={handleInputChange}
            /> 
            
            <CssTextField
            autoComplete="new-password"
            name="dedication"
            value={ dedication }
            label="Cual es la frase que ira en la portada de tu album "
            variant="outlined"
            onChange={handleInputChange}
            /> 

            <CssFormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Lugar de entrega</InputLabel>
                <Select
                
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="city"
                  value={ city }
                  onChange={handleInputChange}
                  label="Lugar de entrega"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Antiguo Cuscatlan </MenuItem>
                  <MenuItem value={20}>Santa Tecla</MenuItem>
                  <MenuItem value={30}>Oficinas</MenuItem>
                </Select>
            </CssFormControl>

            <CssTextField
                  autoComplete="new-password"
                  name="address"
                  value={ address }
                  label="Detallarnos tu dirección exacta"
                  variant="outlined"
                  onChange={handleInputChange}
            /> 
            <button 
            className="btn_review " 
            >Sube tus imágenes</button>
          </div>
        </>
    )
}
