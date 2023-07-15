import React from "react";
import { ReactDOM } from "react-dom";
import logoImage from "../Photos/372_transparent.png"; 
import "../css/Communication.css";


export default function Communication (props){
    return(
          
     <div>
                   


<div class="anasayfa" id="anasayfa">
    <div class="headdd">

   
        <div class="logo" id="memo">
    
            <a href="#"><img src={logoImage} id="logoş"></img> </a>
            
        
        </div>
      
    
        <div class="navs">
    
          
        <a href="homepage"> <h2 className="yazi-1" id="me">Home</h2></a>
                <a href="form"> <h2 className="yazi-2">Form</h2></a>
                <a href="exercise">  <h2 className="yazi-3">Exercise</h2></a>
                <a href="information">   <h2 className="yazi-44">Information</h2></a>
                <a href="communication">   <h2 className="yazi-5">Get in touch</h2></a>
                <a href="payment">   <h2 className="yazi-4">Join us</h2></a>



    
    </div>


    <div class="yazilar">



        </div>


        <div class="kart">
            <form>
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" required=""></input>
                </div>
        
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required=""></textarea>
                </div>
        
                <div class="form-group">
                    <label for="email">To Instructor</label>
                    <input type="email" id="email" name="email" required=""></input>
                </div>
        
                <button type="submit">Submit</button>
            </form>
        </div>
        
    
</div>





    </div>


        </div>


    );



}