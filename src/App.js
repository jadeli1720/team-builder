import React, { useState } from 'react';

import SignupForm from './components/Form';
import TeamList from './components/TeamList';
import { people } from './TeamData';

import './App.css';



function App() {

  const [member, setMember] = useState(people);
  //The above variables for useState should always be surrounded with []. We are this setting the initial state "teamMember" to the array from TeamData.js called people. This will allow us to  map over teamMember and also pass the array data to the child components.

  const [memberToEdit, setMemberToEdit] = useState();

  //Function that will add a new member to state(people). 
  const addMember = person => {
    //adding to and incrementing the id of the people array of objects
    person.id = member.length + 1
    //use setMember to update the useState. 
    setMember([...member, person])
    //Spread operator used to add to array of objects but keep existing values in place.
  }

  return (
    <div className="App">
      <h1>Who's on the team</h1>

      <div className=" left-column">
      <h3>Add a Team Member</h3>
        <SignupForm 
          member={member}
          setMember={setMember}
          addMember={addMember}
         />
      </div>

      <div className="right-column">
        <h3>Meet the Development Team</h3>
        <TeamList
          member={member}
          setMember={setMember}
          memberToEdit={memberToEdit}
          setMemberToEdit={setMemberToEdit}
        />
      </div>
    </div>
  );
}

export default App;
