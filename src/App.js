import React, { useState } from 'react';

import SignupForm from './components/Form';
import TeamList from './components/TeamList';
import { member } from './TeamData';

import './App.css';



function App() {

  const {teamMember, setTeamMember} = useState([])
  console.log(member)
  //may need to change the key and value. Value may become an empty string. 
  //? does the useState go outside or inside the App function?
    
  return (
    <div className="App">
      <h1>Who's on the team</h1>
      <h3>Add a Team Member:</h3>
      <SignupForm 
          teamMember={teamMember}
          setTeamMember={setTeamMember}
      />

      <TeamList
          teamMember={teamMember}
          setTeamMember={setTeamMember}
      />
      
        
    </div>
  );
}

export default App;
