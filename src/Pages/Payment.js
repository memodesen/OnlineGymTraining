import React from "react";
import { ReactDOM } from "react-dom";
import logoImage from "../Photos/372_transparent.png";
import "../css/Payment.css";

export default function Payment(props) {
  return (


      <div className="anasayfa" id="anasayfa">
        <div className="headdd">
          <div className="logo" id="memo">
            <a href="#">
              <img src={logoImage} id="logoş" />
            </a>
          </div>

          <div className="navs">
            <a href="homepage">
              <h2 className="yazi-1" id="me">
                Home
              </h2>
            </a>

            <a href="form">
              <h2 className="yazi-2">Form</h2>
            </a>

            <a href="exercise">
              <h2 className="yazi-3">Exercise</h2>
            </a>

            <a href="information">
              <h2 className="yazi-44">Library</h2>
            </a>

            <a href="communication">
              <h2 className="yazi-5">Get in touch</h2>
            </a>

            <a href="payment">
              <h2 className="yazi-4">Join us</h2>
            </a>
            <a href="payment">
              <h2 className="yazi-4">Register</h2>
            </a>
            <a href="payment">
              <h2 className="yazi-4">Login</h2>
            </a>

           
          </div>
        </div>

      
          <h1 className="yazilar-1">Choose your membership package.</h1>

          <div className="üyelik">
            <div className="gold">
              <h2 id="classic">GOLD</h2>
              <h1 id="altıyüz">810 TL</h1>
              <h3 id="peşin">EXTRA 20% DISCOUNT FOR ADVANCE PAYMENT</h3>
              <h3 id="pakett">PACKAGE</h3>
              <hr />
              <div>
                <i className="fa-solid fa-check"></i>
                <h4 id="üyelik">Freezing by Membership Period</h4>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <h4 id="üyelik">Early Group Classes - 4 Days</h4>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <h4 id="üyelik">Personalized Measurement and Program</h4>
              </div>
            </div>

            <div className="klasik">
              <h2 id="classic">CLASSIC</h2>
              <h1 id="altıyüz">620 TL</h1>
              <h3 id="peşin">EXTRA 20% DISCOUNT FOR ADVANCE PAYMENT</h3>
              <h3 id="pakett">PACKAGE</h3>
              <hr />
              <div>
                <i className="fa-solid fa-check"></i>
                <h4 id="üyelik">Freezing by Membership Period</h4>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <h4 id="üyelik">Early Group Classes - 2 Days</h4>
              </div>
              <div>
                <i className="fa-solid fa-check"></i>
                <h4 id="üyelik">Measurement and Program with 2 People</h4>
              </div>
            </div>
          </div>
        </div>
    
   
  );
}
