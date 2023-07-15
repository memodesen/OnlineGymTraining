import React from "react";
import { ReactDOM } from "react-dom";
import logoImage from "../Photos/372_transparent.png"; 
import "../css/Form.css";


export default function Form (props){
    return(
          
     <div>
                   
        <div className="anasayfa" id="anasayfa">
                 <div claassName="headdd">

   
        <div className="logo" id="memo">
    
        <a href="#"> <img src={logoImage} id="logoş" alt="Logo" /> </a>
            
        
        </div>
      
    
        <div className="navs">
    
           
        <a href="homepage"> <h2 className="yazi-1" id="me">Home</h2></a>
                <a href="form"> <h2 className="yazi-2">Form</h2></a>
                <a href="exercise">  <h2 className="yazi-3">Exercise</h2></a>
                <a href="information">   <h2 className="yazi-44">Information</h2></a>
                <a href="communication">   <h2 className="yazi-5">Get in touch</h2></a>
                <a href="payment">   <h2 className="yazi-4">Join us</h2></a>

  

           
                

        

    
    </div>


    <div className="yazilar">

        <div className="kart">

            <form>
                <div className="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" name="name" required></input>
                </div>
                
                <div className="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" name="email" required></input>
                </div>
                
                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" name="password" required></input>
                </div>
                
                <div className="form-group">
                  <label for="confirm-password">Confirm Password</label>
                  <input type="password" id="confirm-password" name="confirm-password" required></input>
                </div>
                
                <button type="submit">Submit</button>
              </form>

        </div>

        </div>

        <h1 className="yazilar-1">What do you want ?</h1>

        </div>
    
</div>




        </div>
    );



}