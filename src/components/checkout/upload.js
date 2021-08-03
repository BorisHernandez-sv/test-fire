require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.uploader
    .upload("https://res.cloudinary.com/mybloc/image/upload/c_fill,g_center,h_1001,w_563/q_auto/v1/variable_Prueba2/2020-08-30_1835341_bnyyy0.jpg",{
     resource_typ: "image",     
    })
    .then((result)=>{
        console.log("sucess",JSON.stringify(result,null,2));
    })
    .catch((error)=>{
        console.log("error",JSON.stringify(error,null,2));
    });