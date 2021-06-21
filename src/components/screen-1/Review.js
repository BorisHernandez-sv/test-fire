import React, { useState,useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';

// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';

import { useForm } from '../../hooks/useForm'
// import { createRecord, getRecords } from '../../hooks/useAirtable';
import { useHistory } from 'react-router-dom';

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

  // const CssFormControl = withStyles({
  //   root: {
  //     '& label.Mui-focused': {
  //       color: primaryColor,
  //     },
  //     '& .MuiInput-underline:after': {
  //       borderBottomColor: primaryColor,
  //     },
  //     '& .MuiOutlinedInput-root': {
  //       '& fieldset': {
  //         borderColor: primaryColor,
  //       },
  //       '&:hover fieldset': {
  //         borderColor: primaryColor,
  //       },
  //       '&.Mui-focused fieldset': {
  //         borderColor: primaryColor,
  //       },
  //     },
  //   },
  // })(FormControl);

  // const useStyles = makeStyles((theme) => ({
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 300
  //   },
  //   selectEmpty: {
  //     marginTop: theme.spacing(2)
  //   },
  // }));


export const Review = () => {

  // const classes = useStyles();
  const [errors, setErrors] = useState({errors:{} });
  const history = useHistory();
  const [ formValues, handleInputChange ] = useForm({
      Email:'',
      dedication:'',
      address:'',
      city:'',
      state:'',
      phoneNumber:'',
  });

  const { Email, dedication} = formValues;

  const handleValidation =()=>{
    let formIsValid = true;
    let error = {};

    if (dedication.length === 0) {
      formIsValid = false;   
      error['dedication'] = "No puede ir vació";
    }

    if(typeof dedication !== "undefined" && dedication.length > 0){
        if(!dedication.match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          error['dedication'] = "Solo letras";
        }
    }

    //Email
    if(Email.length === 0){
      formIsValid = false;
      error["email"] = "No puede ir vació";
    }

    if(typeof Email !== "undefined" && Email.length > 0){
      let lastAtPos = Email.lastIndexOf('@');
      let lastDotPos = Email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && Email.indexOf('@@') === -1 && lastDotPos > 2 && (Email.length - lastDotPos) > 2)) {
        formIsValid = false;
        error["email"] = "El Correo no es valido";
      }
    }  

    setErrors({errors:error});
    return formIsValid;
  }

  useEffect(() => {
    localStorage.clear();
  })

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('typeof', dedication.length)
    if(handleValidation()){
      localStorage.setItem('email',Email);
      localStorage.setItem('dedication',dedication);
      history.push("/checkout")
    }
  }

    return (
        <>
        <form onSubmit={handleSubmit} required>
          <div className="review__form">
            <CssTextField
            id="filled-required"
            autoComplete='new-password'
            name="Email"
            value={ Email }
            className="review__textfield-name"
            label="Tu correo "
            variant="outlined"
            type='Email'
            helperText={errors.errors['email']}
            onChange={handleInputChange}
            
            /> 
            
            <CssTextField
            id="filled-required"
            autoComplete="new-password"
            name="dedication"
            value={ dedication }
            label="Cual es la frase que ira en la portada de tu album "
            variant="outlined"
            helperText={errors.errors['dedication']}
            onChange={handleInputChange}
            /> 

            {/* <CssFormControl variant="outlined" className={classes.formControl}>
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
            />  */}
            <button 
            className="btn_review " 
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            >Sube tus imágenes</button> 
            
          </div>
          </form>
        </>
    )
}
