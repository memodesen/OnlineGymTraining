import React from "react";
import { ReactDOM } from "react-dom";
import logoImage from "../Photos/372_transparent.png"; 
import '../css/Homepage.css';



export default function Homepage (props){
    return(
      
    <div>


     <div className="anasayfa" id="anasayfa"> 

       

        <div className="headdd">
    
        <div className="logo" id="memo">
        <img src={logoImage} id="logoş" alt="Logo" /> 
        </div>

        <div className="navs">
    
                <a href="homepage"> <h2 className="yazi-1" id="me">Home</h2></a>
                <a href="form"> <h2 className="yazi-2">Form</h2></a>
                <a href="exercise">  <h2 className="yazi-3">Exercise</h2></a>
                <a href="information">   <h2 className="yazi-44">Information</h2></a>
                <a href="communication">   <h2 className="yazi-5">Get in touch</h2></a>
                <a href="payment">   <h2 className="yazi-4">Join us</h2></a>

                  

    
         </div>

     
          

               <h4 className="yazilar-2">FITNESS PERSONAL TRAINING</h4>
               <h1 className="yazilar-1">YOU'RE READY,LET'S GO!</h1>
               <a href="payment.html">  <h4 className="yazilar-3">START TODAY</h4></a>


            


      </div>


      </div>
 



    </div>
     

    );

}