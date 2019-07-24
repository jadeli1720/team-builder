import React, { useState } from 'react';

import SignupForm from './components/Form';
import TeamList from './components/TeamList';
import { people } from './TeamData';

import './App.css';



function App() {

  const [teamMember, setTeamMember] = useState(people);
  console.log(teamMember);
    
  return (
    <div className="App">
      <h1>Who's on the team</h1>
      <h3>Add a Team Member:</h3>
      <SignupForm 
      />

      <TeamList
          teamMember={teamMember}
          setTeamMember={setTeamMember}
      />
      
    </div>
  );
}

export default App;
