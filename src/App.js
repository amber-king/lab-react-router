import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// * ^-- wraps your app in Router; will pass down all the router functionality to the components inside 
// * routes -> defines the area that will display the views & wraps around the views we want to create
/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes> 
        
          {/* 
          -> all below info was wrapped in its own route nested inside of Routes w/i Router.
          -> Includes the following: <Home/>;<Staff/>;<Pets/>; <Pets/:kind/> 
          
          */}
          
          <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />} />
          <Route path="/staff" element={<StaffList employees={employees} />} />
          <Route path="/pets" element={<PetsList pets={pets} />} />
          <Route path="/pets/:kind" element={<PetsList pets={pets} />} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
