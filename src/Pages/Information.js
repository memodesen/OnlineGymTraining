import React from "react";
import { ReactDOM } from "react-dom";
import logoImage from "../Photos/372_transparent.png"; 
import webp1 from "../Photos/1.webp";
import webp2 from "../Photos/2.webp";
import webp3 from "../Photos/3.webp";
import "../css/Information.css";


export default function Information (props){
    return(
          
     <div>
                   
                   <div className="anasayfa" id="anasayfa">
    <div className="headdd">

   
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


    
    <a href="information.html">  <h4 className="memolar">Read more</h4></a>


        <h1 className="yazilar-1">From Bottom to Top</h1>
        <h4 className="high">Highlights</h4>


         <div className="source">


            
                
            <div className="kart">

           
            <img src={webp1} alt="" className="fotoş"></img>
           
             <h4 className="minik2">What is Trekking? What are the Benefits?</h4>
              <h5 className="minik3">READ MORE</h5>

            </div>

            <div className="kart">
                
                <img src={webp2} alt="" className="fotoş"></img>
               
                <h4 className="minik2">Protein Powder: What Is It, What Does It Do and How to Use It?</h4>
                <h5 claclassNamess="minik3">READ MORE</h5>
            </div>

            <div className="kart">
                
                <img src={webp3} alt="" className="fotoş"></img>
               
                <h4 className="minik2">Cardio What is it, How to do it? Watch 5 Popular Cardio Moves</h4>
                <h5 className="minik3">READ MORE</h5>
            </div>


         </div>

       


        <div className="next">

            <i className="bubble" id="bubbleid"></i>
        
        </div>
        
        
        <div className="previous">
        
            <i className="bubble-2" id="bubble2id"></i>
        
        </div>


    
</div>





</div>

        </div>
    );



}