import React, { useState } from 'react';
import './App.css';



function App() {

  const {teamMember, setTeamMember} = useState({key:"value"})
  //may need to change the key and value. Value may become an empty string. 
  //? does the useState go outside or inside the App function?

  return (
    <div className="App">

    </div>
  );
}

export default App;
