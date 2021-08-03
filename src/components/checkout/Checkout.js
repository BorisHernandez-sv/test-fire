import React, { useEffect, Component }  from 'react'
import { Helmet } from "react-helmet";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LogoSider1 from '../images/logo192.png'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

//require("dotenv").config();
// const cloudinary = require("cloudinary").v2;
//var cloudinary = require('cloudinary').v2
//console.log(cloudinary.config().cloud_name);

import {cloudinary} from 'cloudinary-core';


//const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'mybloc'});


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

    const uploadWidget =()=> {
       return ( window.cloudinary.openUploadWidget ( {
            //api_key: '783936352855856',
            cloud_name: 'mybloc',
            uploadPreset :'EcvwLSgCAJnJv8Hf5Zn3r5cxEf8R6Pdz',
            folder: 'variable_Prueba2' //correo + id+frase (40 char)
                }
            ))
    }


    //class App extends Component {
     const   launchMediaEditor = async (e) => {
    
        const myEditor = window.cloudinary.mediaEditor();
        myEditor.update({
          publicIds: ["variable_Prueba2/2020-08-30_1835341_bnyyy0.jpg"] ,
          cloudName: "mybloc"
        });
        myEditor.on("export", function (data) {
          console.log(data);
          //console.log("HTTPS transformed image: " + data.assets[0].secureUrl);
           let linkurl= data.assets[0].secureUrl ;
           console.log("Variable linkurl aqui: " + data.assets[0].secureUrl);
        //   //<script src="https://widget.cloudinary.com/global/all.js" type="text/javascript"></script>
           const formData = new FormData();
           formData.append("file","https://picsum.photos/200/300");
           formData.append("upload_preset","EcvwLSgCAJnJv8Hf5Zn3r5cxEf8R6Pdz");

           Axios.post(
             "https://api.cloudinary.com/mybloc/image/upload",
             formData
             ).then((response)=>{
                console.log(response); 
             });

          //cloudinary.uploader.upload(linkurl,{resource_type: "image"});
          //cloudinary.v2.uploader.unsigned_upload(linkurl, 'EcvwLSgCAJnJv8Hf5Zn3r5cxEf8R6Pdz',{public_id : 'variable_Prueba2/2020-08-30_1835341_bnyyy0.jpg'});
          //cloudinary.v2.uploader.unsigned_upload(linkurl, 'EcvwLSgCAJnJv8Hf5Zn3r5cxEf8R6Pdz');
        });
        myEditor.show();
      };
    //};

    const   launchProductGallery = async (e) => {
            const myGallery= cloudinary.galleryWidget({
            container: "#my-gallery",
            cloudName: "mybloc",
            mediaAssets: [
                {publicId: "variable_Prueba2/2020-08-30_1835341_bnyyy0.jpg", mediaType: "image"}, // by default mediaType: "image"
            //   {tag: "electric_car_product_gallery_demo"}, // by default mediaType: "image"
            //   {tag: "electric_car_product_gallery_demo", mediaType: "video"}, 
            //   {tag: "electric_car_360_product_gallery_demo", mediaType: "spin"}
            ]
          });
          
          myGallery.render();

    };


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
                >Paso 1: Sube tus imágenes
            </button>

              <div className="App"> 
                <Helmet>
                    <script  src="https://media-editor.cloudinary.com/all.js"  type="text/javascript"                 ></script>
                </Helmet>
                <button className="btn_edit " id="mediaEditor" onClick={launchMediaEditor}> Paso 2: Edita tus imágenes   </button>
            </div>

             <button
                className="btn_edit " 
                onClick={launchMediaEditor}
            >Paso 2222: Edita tus imágenes
            </button> 

            <button
                className="btn_view " 
                onClick={launchProductGallery}
            >Paso 3: Ve tus imagenes
            </button>

        </div>
    )
    }else {
        return(
        <h1>complete el formulario anterior</h1>
        )
    }
}


