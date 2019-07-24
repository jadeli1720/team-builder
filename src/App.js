import React, { useState } from 'react';
import './App.css';



function App() {

  const {teamMember, setTeamMember} = useState({key:"value"})
  //may need to change the key and value. Value may become an empty string. 
  //? does the useState go outside or inside the App function?

  return (
    <div className="App">
      <h1>Team Member List</h1>
      {/* Hardcoded example of what I need */}
      <div>
        <h4>Name: Jade</h4>
        <p>Email: jade@gmail.com</p>
        <p>Role: UX Designer</p>
      </div>
      <div>
        <h4>Name: Landry</h4>
        <p>Email: Landry@gmail.com</p>
        <p>Role: Front End Developer</p>
      </div>
      <div>
        <h4>Name: Adnan</h4>
        <p>Email: Adnan@gmail.com</p>
        <p>Role: Front End Framework Developer</p>
      </div>
      <div>
        <h4>Name: Darien</h4>
        <p>Email: Darien@gmail.com</p>
        <p>Role: Back End  Developer</p>
      </div>
    </div>
  );
}

export default App;
