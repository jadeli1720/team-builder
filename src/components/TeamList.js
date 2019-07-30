import React from 'react';

//what we need for this component: {name: "", email:"", role: ""}

export default function MemberList(props) {

    return (
        <div className="member-container">
            <h1>Meet the Development Team</h1>
            {props.member.map((person, index) => {
                return (
                    <div className="card" key={index}>
                        <h4>Name: {person.name}</h4>
                        <p>Email: {person.email}</p>
                        <p>Email: {person.role}</p>
                        <button onClick={props.memberToEdit}>Edit</button>
                        
                    </div>
                )
            })}
            {/* { console.log('MemberList', props) } */}
        </div>
    )
}