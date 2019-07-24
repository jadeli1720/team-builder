import React from 'react';

export default function MemberList (props) {
    // const members = props;

    return (
        <div className="member-container">
            {props.members}
            {console.log('MemberList', props)}
        </div>
    )
}