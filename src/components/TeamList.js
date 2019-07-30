import React from 'react';
import { Link } from 'react-router-dom';
// import { people } from '../TeamData';
//what we need for this component: {name: "", email:"", role: ""}

export default function MemberList(props) {
    const { person } = props
    return (
        <div className="member-container">
            <h1>Meet the Development Team</h1>
            {props.member.map((person, index) => {
                return (
                    <div className="card" key={index}>
                        <h4>Name: {person.name}</h4>
                        <p>Email: {person.email}</p>
                        <p>Email: {person.role}</p>
                        <Link to={`/edit/${person.id}`}>Edit</Link>
                        
                    </div>
                )
            })}
            {/* { console.log('MemberList', props) } */}
        </div>
    )
}