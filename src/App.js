import React, { useState } from 'react';

import SignupForm from './components/Form';
import TeamList from './components/TeamList';
import { members } from './TeamData';

import './App.css';



function App() {

  const {teamMember, setTeamMember} = useState({})
  
    
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
      {members.map( (person, index) => {
        console.log(person)
        return  (
          <div className="container" key={index}> 
                <h4>Name: {person.name}</h4>
                <p>Email: {person.email}</p>
                <p>Email: {person.role}</p>
          </div>
        )
      })}
      
        
    </div>
  );
}

export default App;
