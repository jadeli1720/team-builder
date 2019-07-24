import React from 'react';

export default function MemberList (props) {
    // const members = props;

    return (
        <div className="member-container">
            {props.teamMember.map( (person, index) => {
        // console.log(person)
        return  (
          <div className="container" key={index}> 
                <h4>Name: {person.name}</h4>
                <p>Email: {person.email}</p>
                <p>Email: {person.role}</p>
          </div>
        )
      })}
        </div>
    )
}