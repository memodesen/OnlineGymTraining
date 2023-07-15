import React from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Modified import statement
import Homepage from "./Pages/Homepage";
import Form from "./Pages/Form";
import Exercise from "./Pages/Exercise";
import Information from "./Pages/Information";
import Communication from "./Pages/Communication";
import Payment from "./Pages/Payment";


function AppRouter() {
  return (
    <div>

    <Router>
      <Routes>

         <Route path="/" element={<Homepage />} />
         <Route path="/homepage" element={<Homepage />} />
         <Route path="/form" element={<Form />} />
         <Route path="/exercise" element={<Exercise />} />
         <Route path="/information" element={<Information />} />
         <Route path="/communication" element={<Communication />} />
         <Route path="/payment" element={<Payment />} />

        
      
      </Routes>
    </Router>

    </div>
  );
}

export default AppRouter;
