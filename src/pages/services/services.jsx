import { Routes, Route, useNavigate } from "react-router-dom";
import SeriveNav from "./SeriveNav.jsx";
import ServicesContent from "./servicesContent.jsx";
import React from "react";
import "./services.css";



export default function Services() {

  const navigate = useNavigate();
  

    return (
        <div className="service-container">
            <SeriveNav/>
            <Routes>
                <Route path="/Staffing-Services" element={<ServicesContent mainheading={"Staffing Services"} />} />
                <Route path="/Product-Engereing" element={<ServicesContent mainheading={"Product Engereing"} />} />
                <Route path="/Agile-infra-services" element={<ServicesContent mainheading={"Agile infra services"} />} />
                <Route path="/INTERNET-OF-THINGS" element={<ServicesContent mainheading={"INTERNET OF THINGS"} />} />
                <Route path="/SECURITY-SERVICES" element={<ServicesContent mainheading={"SECURITY SERVICES"} />} />
                <Route path="/Analytics" element={<ServicesContent mainheading={"Analytics"} />} />
                <Route path="/GENERATIVE-AI-BUSINESS" element={<ServicesContent mainheading={"GENERATIVE AI BUSINESS"} />} />    
            </Routes>

        </div>
    );
}