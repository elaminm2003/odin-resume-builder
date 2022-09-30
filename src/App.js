import React from 'react'
import "./styles.css"
import PersonalInfo from "./components/PersonalInfo"
import ProfessionalExp from "./components/ProfessionalExp"

function App() {
  return (
    <div>
      <h1>Resume Builder</h1>
      
      <h2>Personal Information</h2>
      <PersonalInfo/>

      <h2>Professional Experince</h2>
      <ProfessionalExp/>
    </div>
  );
}

export default App;
