import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LogoSider1 from '../images/logo192.png'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",

        "& > *": {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16)
        }
    }
  }));
export const Checkout = () => {
    const classes = useStyles();
    const history = useHistory();
    let email = localStorage.getItem('email');
    // let dedication = localStorage.getItem('dedication');
    useEffect(() => { 
        if(!localStorage.getItem('email')){
            // history.push("/review")
            history.goBack();
        }
    //   localStorage.getItem('email') ? history.push("/review") : '' ; 
    })
    // const uploadWidget =()=> {
    //     window.cloudinary.createMediaLibrary({
    //          cloud_name: 'mybloc',
    //          upload_preset: 'ml_default', 
    //         //  unique_filename: true,
             
    //          tags:['xmas']},
    //         function(error, result) {
    //             console.log(result);
    //             console.log(result.info.files);
    //         });
    // } 
    const uploadWidget =()=> {
       return ( window.cloudinary.openUploadWidget({
            cloud_name: 'variable_correo_id',
            uploadPreset:"ml_default"   
            // api_key: '783936352855856',
            // username: 'Alice_Wonderlin@mycompany.com',
            // // timestamp: '1234567890',
            // signature: 'abcdefgh',
            // inline_container: '.cms-container',
            // multiple: true,
            // max_files: 8,
            // }, {
            //      insertHandler: function (data) {
            //        data.assets.forEach(asset => { console.log("Inserted asset:", 
            //          JSON.stringify(asset, null, 2)) })
            //      }
                }
            ))
    }
    if (email){
    return (
        <div className="review__form">
            <div className={classes.root}>
         
            <Paper elevation={3}><button className = "btn_checkout-paper"><img src = {LogoSider1} className="nav__logo-sidebar" ></img> </button></Paper>
            <Paper elevation={3}><button className = "btn_checkout-paper"><img src = {LogoSider1} className="nav__logo-sidebar" ></img> </button></Paper>
            <Paper elevation={3}><button className = "btn_checkout-paper"><img src = {LogoSider1} className="nav__logo-sidebar" ></img> </button></Paper>
            </div>

            <button
            className="btn_review " 
            onClick={uploadWidget}
            >Sube tus imágenes</button>

        </div>
    )
    }else {
        return(
        <h1>complete el formulario anterior</h1>
        )
    }
}
