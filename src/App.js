import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import SignupForm from './components/Form';
import TeamList from './components/TeamList';
import { people } from './TeamData';

import './App.css';



function App() {

  const [member, setMember] = useState(people);
  //The above variables for useState should always be surrounded with []. We are this setting the initial state "teamMember" to the array from TeamData.js called people. This will allow us to  map over teamMember and also pass the array data to the child components.

  // const [memberToEdit, setMemberToEdit] = useState();

  //Function that will add a new member to state(people). 
  const addMember = person => {
    setMember([...member, person])
  }

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/components/Form">Add Person</Link>
      <Route path="/components/Form" 
              render={props => <SignupForm {...props} 
              submitMember={addMember} />} />

      <Route exact path ="/" 
             render={props => <TeamList {...props}
             member={member}
             setMember={setMember} />}/>

      
    </div>
  );
}

export default App;
