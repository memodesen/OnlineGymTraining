import React from "react";
import { ReactDOM } from "react-dom";
import logoImage from "../Photos/372_transparent.png"; 
import "../css/Exercise.css";


export default function Exercise (props){
    return(
          
     <div>
                   



<div className="anasayfa" id="anasayfa">
    <div className="headdd">

   
        <div className="logo" id="memo">
    
            <a href="#"><img src={logoImage} id="logoş"></img></a>
            
        
        </div>
      
    
        <div className="navs">
    
            
        <a href="homepage"> <h2 className="yazi-1" id="me">Home</h2></a>
                <a href="form"> <h2 className="yazi-2">Form</h2></a>
                <a href="exercise">  <h2 className="yazi-3">Exercise</h2></a>
                <a href="information">   <h2 className="yazi-44">Information</h2></a>
                <a href="communication">   <h2 className="yazi-5">Get in touch</h2></a>
                <a href="payment">   <h2 className="yazi-4">Join us</h2></a>



        <div className="workout-table">

          <div className="progress-bar">
            <div className="progress" id="progress"></div>
            
          </div>


         
          
            <h1>Workout Records</h1>
            <table id="records">
              <thead>
                <tr>
                  <th>Exercise</th>
                  <th>Rounds</th>
                  <th>Movement Count</th>
                  <th>Rest Time</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bench Press</td>
                  <td><input type="text" id="benchPressRound" name="benchPressRound"></input> </td>
                  <td><input type="text" id="benchPressMovementCount" name="benchPressMovementCount"></input></td>
                  <td><input type="text" id="benchPressRestTime" name="benchPressRestTime"></input></td>
                  <td><input type="checkbox" id="benchPressRestTime" name="benchPressRestTime"></input></td>

                </tr>
                <tr>
                  <td>Squat</td>
                  <td><input type="text" id="benchPressRound" name="benchPressRound"></input></td>
                  <td><input type="text" id="benchPressMovementCount" name="benchPressMovementCount"></input></td>
                  <td><input type="text" id="benchPressRestTime" name="benchPressRestTime"></input></td>
                  <td><input type="checkbox" id="benchPressRestTime" name="benchPressRestTime"></input></td>
                </tr>
                <tr>
                  <td>Deadlift</td>
                  <td><input type="text" id="benchPressRound" name="benchPressRound"></input></td>
      <td><input type="text" id="benchPressMovementCount" name="benchPressMovementCount"></input></td>
      <td><input type="text" id="benchPressRestTime" name="benchPressRestTime"></input></td>
      <td><input type="checkbox" id="benchPressRestTime" name="benchPressRestTime"></input></td>
                </tr>
                <tr>
                  <td>Barbell Curl</td>
                  <td><input type="text" id="benchPressRound" name="benchPressRound"></input></td>
      <td><input type="text" id="benchPressMovementCount" name="benchPressMovementCount"></input></td>
      <td><input type="text" id="benchPressRestTime" name="benchPressRestTime"></input></td>
      <td><input type="checkbox" id="benchPressRestTime" name="benchPressRestTime"></input></td>
                </tr>
              

              </tbody>
            </table>
            
            <div className="buttons">
              <button id="submit">Calculate the progress.</button>
              <button id="add">Add workout type.</button>
              <button id="add">Remove workout type.</button>
            </div>
          </div>
          
       

    </div>


      <div className="previous">%50</div>
  
  



</div></div>

        </div>
    );



}