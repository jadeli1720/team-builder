import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import SignupForm from './components/Form';
import TeamList from './components/TeamList';
// import { people } from './TeamData';//We actually don't need this. We can have line 13 the way it is so that it can except any data. It's ready to go

import './App.css';



function App() {

  const [member, setMember] = useState([]);
  //The above variables for useState should always be surrounded with []. We are this setting the initial state "teamMember" to the array from TeamData.js called people. This will allow us to  map over teamMember and also pass the array data to the child components.

  // const [memberToEdit, setMemberToEdit] = useState();

  //Function that will add a new member to state(people). 
  const addMember = person => {
    setMember([...member, {...person, id: Date.now()}])
    //Date.now() is the value of id. This will generate a unique id for people we are adding using this function. This will be important for when we are editing and need to grab them.
  }

  //Function to edit existing member
  const editMember = editedMember => {
    const memberCopy = [...member];
    const oldMember = memberCopy.find(member=> member.id === editedMember.id);
    console.log(editedMember,oldMember);
   
    // oldMember.name = editedMember.name;
    // oldMember.email = editedMember.email;
    // oldMember.role = editedMember.role;
    //Above DRY
    Object.assign(oldMember, editedMember);
    setMember(memberCopy);
  };

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/components/Form">Add Person</Link>
      <Route path="/components/Form" 
              render={props => <SignupForm {...props} 
              submitMember={addMember}
              buttonText="Add Person"
              />} />

      <Route exact path ="/" 
             render={props => <TeamList {...props}
             member={member}
             setMember={setMember} />}/>

      <Route path="/edit/:id" 
             render={props => {
              //  console.log(props);
              const person = member.find(member=> member.id.toString() === props.match.params.id);
              return <SignupForm {...props} 
                                 initialPerson={person}
                                 submitMember={editMember}
                                 buttonText="Edit Person"
                                 />;
              }}/>
    </div>
  );
}

export default App;
